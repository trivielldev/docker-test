FROM dockerfile/nodejs

COPY src /src

RUN cd /src; npm install


EXPOSE 8080

CMD ["node", "/src/app.js"]