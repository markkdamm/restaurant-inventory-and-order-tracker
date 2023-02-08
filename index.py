class inventory():
    def __init__(self, fish, rice, sauce):
        self.fish = fish
        self.rice = rice
        self.sauce = sauce
    def print(self):
        print(self.fish)

a = inventory(5,4,6)
a.print()