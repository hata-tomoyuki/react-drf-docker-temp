# Node.js 16.17.0の公式イメージを使用
FROM node:16.17.0

# 作業ディレクトリを設定
WORKDIR /app

# プロジェクトのパッケージマネージャをインストール
RUN npm install -g create-react-app

# ホスト側のコードをコンテナにコピー
COPY . .

# プロジェクトの作成コマンドを実行（後述の手順で実行）
CMD ["npm", "start"]
