# 🎭 Random Joke Generator

A fun and interactive web application that fetches random jokes from an external API and displays them with beautiful styling!

## ✨ Features

- 🎲 **Random Joke Generator** - Fetches jokes from JokeAPI v2
- 📤 **Social Sharing** - Share jokes on Twitter, WhatsApp, and Facebook
- 📋 **Copy to Clipboard** - Easily copy jokes to share
- ⌨️ **Keyboard Shortcuts** - Press 'J' to get a new joke instantly
- 🎯 **Joke Counter** - Track how many jokes you've loaded
- 🔄 **Two-Part Jokes** - Supports both single and two-part jokes
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Beautiful UI** - Gradient backgrounds with smooth animations
- ⚡ **Fast Loading** - Optimized API calls with loading states
- 🛡️ **Error Handling** - Graceful error messages if API fails

## 🚀 How to Use

1. **Open the file**: Open `joke-generator.html` in your web browser
2. **Get a Joke**: Click the "🎲 Get Joke" button or press 'J' on your keyboard
3. **Share**: Click "📤 Share" to share on social media
4. **Copy**: Click "📋 Copy" to copy the joke to your clipboard
5. **Keep Going**: Click again for more jokes!

## 📁 Files Included

- `joke-generator.html` - Main HTML structure
- `joke-styles.css` - Beautiful CSS styling with animations
- `joke-script.js` - JavaScript with API integration
- `JOKE_GENERATOR_README.md` - This file

## 🔌 API Details

**JokeAPI v2**
- **Endpoint**: `https://v2.jokeapi.dev/joke/Any`
- **Type**: Free API (No authentication required)
- **Response**: Random jokes in JSON format
- **Formats**: Single-part and two-part jokes
- **Safe Mode**: Filters inappropriate content

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| J | Get a new joke |

## 🌐 Social Media Integration

- **Twitter** - Share with custom hashtags
- **WhatsApp** - Share directly with contacts
- **Facebook** - Share on your timeline

## 💻 Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers

## 🎨 Customization

### Change Colors
Edit `joke-styles.css` and modify the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change API Source
Edit `joke-script.js` and modify the API_URL:
```javascript
const API_URL = 'https://v2.jokeapi.dev/joke/Any?type=single,twopart';
```

### Auto-Load Joke on Page Load
Uncomment this line in `joke-script.js`:
```javascript
// fetchJoke();
```

## 📊 How It Works

1. **Fetch Request**: JavaScript makes an async fetch request to JokeAPI
2. **Parse Response**: The API returns JSON data with the joke
3. **Display**: Joke is displayed with animations
4. **Share**: Users can share or copy the joke
5. **Counter**: Joke count increments with each new joke

## 🔍 Example API Response

```json
{
  "error": false,
  "category": "General",
  "type": "single",
  "joke": "Why don't scientists trust atoms? Because they make up everything!",
  "flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false,
    "explicit": false
  },
  "id": 1,
  "safe": true,
  "lang": "en"
}
```

## 🛠️ Troubleshooting

**Jokes not loading?**
- Check your internet connection
- Make sure JavaScript is enabled
- Try refreshing the page

**Share buttons not working?**
- Make sure pop-ups are enabled
- Check your social media privacy settings

**Keyboard shortcut not working?**
- Make sure the page is in focus (click on the page first)
- Try a different browser

## 📝 License

This project is open source and free to use!

## 🙌 Credits

- **API**: [JokeAPI v2](https://v2.jokeapi.dev) by Sv443
- **Design**: Custom gradient and animations
- **Icons**: Unicode emojis

## 🎉 Have Fun!

Enjoy sharing laughs with the Random Joke Generator! Don't forget to press 'J' for a quick laugh! 😂
