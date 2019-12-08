import app from './app';

app.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Servidor iniciado em ${url}`);
});
