from flask import Flask, render_template

app = Flask(__name__)

app.static_folder = 'static'
app.template_folder = 'templates'


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/education")
def education():
    return render_template("education.html")


@app.route("/experience")
def experience():
    return render_template("experience.html")


@app.route("/projects")
def projects():
    return render_template("projects.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
