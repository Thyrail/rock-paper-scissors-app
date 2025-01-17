import time
import random

def loading_animation(message, duration=3):
    """Zeigt eine Ladeanimation in der Konsole."""
    for _ in range(duration):
        for frame in "|/-\\":
            print(f"\r{message} {frame}", end="", flush=True)
            time.sleep(0.2)
    print("\r" + " " * len(message), end="\r")  # Leere die Zeile

def generate_quote():
    """Gibt ein zufälliges Zitat aus."""
    quotes = [
        "Keep pushing forward!",
        "Believe in yourself and all that you are.",
        "Dream big, work hard, stay focused.",
        "The only limit is your imagination.",
        "You miss 100% of the shots you don’t take."
    ]
    return random.choice(quotes)

# Hauptprogramm
if __name__ == "__main__":
    print("✨ Welcome to the Inspiration Generator ✨")
    print("-" * 40)
    loading_animation("Fetching your daily dose of inspiration...")
    quote = generate_quote()
    print(f"\n🌟 Here's your quote: \n   '{quote}'\n")
    print("Have an amazing day! 🚀")
