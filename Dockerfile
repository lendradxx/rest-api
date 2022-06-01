FROM archlinux:latest
ENV REPO_URL=https://github.com/lendradxx/len-api

RUN pacman -Syyu --noconfirm
RUN pacman -S nodejs npm python python-pip --noconfirm
RUN pip install mkdocs
RUN git clone ${REPO_URL} app

CMD [ "/app/start.sh" ]