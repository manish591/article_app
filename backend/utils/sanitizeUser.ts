export function sanitizeData<User, Key extends keyof User>(
  data: User, keys: Key[]
): Omit<User, Key> {
  const tempData = { ...data };

  keys.forEach(function(key){
    delete tempData[key];
  });

  return tempData;
}