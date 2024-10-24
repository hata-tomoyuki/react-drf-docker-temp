# ベースイメージとしてPython 3.7を使用
FROM python:3.7-slim

# 作業ディレクトリを作成
WORKDIR /app

# システム依存パッケージとPythonパッケージをインストール
RUN apt-get update && apt-get install -y libpq-dev gcc

# ローカルのrequirements.txtをコンテナ内にコピー
COPY requirements.txt ./

# 必要なPythonパッケージをインストール
RUN pip install --no-cache-dir -r requirements.txt

# コンテナ内での作業ディレクトリを指定
COPY . .

# コンテナのエントリポイント（必要に応じて）
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
