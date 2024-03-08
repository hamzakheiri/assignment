if [ ! -d "node_modules" ]; then
  echo "node_modules not found. Installing..."
  npm install
fi

npm run start:dev
exec "$@"