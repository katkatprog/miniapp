FROM node:20-alpine
WORKDIR "/workspace/app"
RUN apk update && apk upgrade
RUN yarn
CMD ["sh", "-c", "yarn prisma migrate deploy && yarn start"]