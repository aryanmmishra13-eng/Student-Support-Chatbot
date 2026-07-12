import pandas as pd
import string
import nltk

from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
 
nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')

df = pd.read_csv("data/student_support_dataset.csv")

df.head()

stop_words = set(stopwords.words("english"))

def preprocess_text(text):

    # Convert to lowercase
    text = text.lower()

    # Remove punctuation
    text = text.translate(str.maketrans("", "", string.punctuation))

    # Split into words
    words = word_tokenize(text)


    # Join back into sentence
    return " ".join(words)

df["Processed_Question"] = df["Question"].apply(preprocess_text)

vectorizer = TfidfVectorizer(
    lowercase=False,
    ngram_range=(1,3),      # Use 1-word, 2-word, and 3-word phrases
    sublinear_tf=True,
    norm='l2'
)

question_vectors = vectorizer.fit_transform(df["Processed_Question"])

def get_response(user_question):

    # Clean user input
    processed_question = preprocess_text(user_question)
    print("Processed Question:", processed_question)

    # Convert to TF-IDF vector
    user_vector = vectorizer.transform([processed_question])

    # Calculate similarity
    similarity = cosine_similarity(user_vector, question_vectors)

    # Find best matching question
    best_match = similarity.argmax()

    # Highest similarity score
    best_score = similarity[0][best_match]

    # If similarity is too low
    if best_score < 0.60:
        return {
            "answer": "Sorry, I don't have information about that.",
            "category": None,
            "matched_question": None,
            "score": best_score
        }

    # Return matching information
    return {
        "answer": df.iloc[best_match]["Answer"],
        "category": df.iloc[best_match]["Category"],
        "matched_question": df.iloc[best_match]["Question"],
        "score": best_score
    }