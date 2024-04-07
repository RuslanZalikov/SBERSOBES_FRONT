# Склонируйте репозиторий
Введите команду, чтобы склонировать репозиторий
```bash
git clone https://github.com/RuslanZalikov/SBERSOBES_FRONT.git
```

В файле src/App.tsx в функции getSentiment поменяйте url на тот, на котором у вас поднят сервер
```ts
const getSentiment = async () => {
    try {
      const data = new FormData();
      data.append("body", text);
      const response = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: "http://158.160.161.155:8080/predictions/sentiment",
        data: data,
      });
      setSentiment(response.data.data);
    } catch (error) {
      setSentiment(null);
      console.error("Ошибка при отправке запроса:", error);
    }
  };
```
# Установка зависимостей
```bash
npm install pm2 -g
```
# Запуск проекта
```bash
pm2 start yarn --name sentiment -- dev
```
--name : имя процесса

В моем случае фронт поднимется на порту 5173

Чтобы изменить порт укажите это в файле vite.config.ts
```ts
export default defineConfig({
  plugins: [react()],
  server: {
  	host: '0.0.0.0',
	  port: 5173
  }
})
```

# Разработчик

tg@RuslanZalikov
