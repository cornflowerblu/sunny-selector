LOCAL_CODE= docker wait selector-graphql-cli-1
REMOTE_CODE= docker wait sunny-selector-graphql-cli-1

while [ ! $LOCAL_CODE = 0 ]; do
  echo "Waiting for seeding to complete..."
  sleep 30
done

while [ ! $REMOTE_CODE = 0 ]; do
  echo "Waiting for seeding to complete..."
  sleep 30
done