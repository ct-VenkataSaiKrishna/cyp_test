FROM public.ecr.aws/x3t7j9d4/ubuntu-apache-php82
RUN apt update
RUN apt install -y git
COPY /data/docker/cte-olx/ /var/www/html/
