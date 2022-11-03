CODE= docker wait selector-graphql-cli-1

while [ ! $CODE = 0 ]; do
  echo "Waiting for seeding to complete..."
  sleep 30
done