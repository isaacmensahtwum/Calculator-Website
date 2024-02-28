# pip install Flask

from flask import Flask, render_template, request

app = Flask(__name__)

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Cannot divide by zero!"
    return x / y

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    choice = request.form['operation']
    x = float(request.form['num1'])
    y = float(request.form['num2'])

    if choice == 'add':
        result = add(x, y)
    elif choice == 'subtract':
        result = subtract(x, y)
    elif choice == 'multiply':
        result = multiply(x, y)
    elif choice == 'divide':
        result = divide(x, y)
    else:
        result = "Invalid Input"

    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
