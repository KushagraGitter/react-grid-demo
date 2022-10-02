const data = import('../data.json');
async function getBudgetData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
  return promise;
}

export default getBudgetData;
