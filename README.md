# Google Scholar App

## Backend setup

### To start locally:
- Check python version with `python3 --version`
- Run following commands in the terminal
- `pip3 install scholarly`
- `python app.py`

### To start the docker container:
- Start docker daemon (just open the docker application -> daemon will start automatically)
- Execute from the /scholar-api folder `docker build -t scholar-api .` to build an image
- Start the container with `docker run -it -p 1914:1914 scholar-api`
- Application is running on port 1914 and your requests should be like http://localhost:1914/search_author?name=Einstein
- Keep in mind that, when whitespace is added in the url, it is converted to %20, which is handled in the code