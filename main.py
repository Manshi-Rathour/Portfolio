from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles



app = FastAPI()

# Mount a static directory for serving CSS and JavaScript files
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/contact", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("contact.html", {"request": request})


@app.get("/education", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("education.html", {"request": request})


@app.get("/experience", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("experience.html", {"request": request})


@app.get("/projects", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("projects.html", {"request": request})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)