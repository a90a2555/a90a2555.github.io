FROM mcr.microsoft.com/playwright:v1.52.0-jammy
# FROM oven/bun:debian

WORKDIR /app

RUN chmod -R 755 /app

RUN apt update && apt-get install -y \
    curl \
    lsb-release \
    git \
    unzip

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH=$PATH:/root/.bun/bin
RUN bun upgrade

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

RUN bun add -d husky

RUN bunx husky init


RUN bunx playwright install-deps

RUN bunx playwright install

RUN bun i

RUN bun prepare

CMD ["bash"] 