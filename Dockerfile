FROM python:3.9

WORKDIR /app

COPY . /app

RUN pip3 install scholarly

EXPOSE 1914

CMD ["python3", "app.py"]