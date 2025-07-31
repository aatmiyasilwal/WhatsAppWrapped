# WhatsApp Wrapped 📱💬
![Python](https://img.shields.io/badge/python-3.11%2B-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
[![GitHub Issues](https://img.shields.io/github/issues/aatmiyasilwal/WhatsAppWrapped.svg)](https://github.com/aatmiyasilwal/WhatsAppWrapped/issues)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)


A comprehensive analysis tool for WhatsApp chat exports, featuring a Python-based analytics engine and a modern React TypeScript frontend. Get deep insights into messaging patterns, sentiment analysis, emoji usage, and communication trends through beautiful, interactive visualizations.

## 🌟 Features

### 📊 **Core Analysis**
- **Message Frequency Analysis**: Track messaging patterns over time and by user
- **Temporal Analysis**: Discover peak messaging hours, days, and monthly trends
- **User Activity Patterns**: Compare messaging behavior between participants

### 🎭 **Advanced Analytics**
- **Sentiment Analysis**: Analyze emotional content using TextBlob
- **Emoji Analysis**: Track most used emojis and patterns
- **Word Frequency & Word Clouds**: Visualize most common words and topics
- **Named Entity Recognition**: Identify people, places, and organizations mentioned
- **Video Call Tracking**: Extract and analyze video call durations


## 📁 Project Structure

```
WhatsAppWrapped/
├── whatsapp_parser.ipynb       # Parse WhatsApp chat exports
├── public_whatsapp_analysis.ipynb     # Comprehensive analysis notebook
├── config.yml                  # Configuration file
├── data/                       # Data folder
│   ├── whatsapp_parsed_data.csv
│   └── [your_chat_file.txt]
├── frontend/                   
│   ├── package.json           
│   ├── tsconfig.json          
│   ├── public/                # Static assets
│   │   ├── index.html
│   │   └── manifest.json
│   └── src/                   # Source code
│       ├── index.tsx          
│       ├── App.tsx            
│       ├── index.css          
│       ├── App.css            
│       └── components/        # React components
│           ├── WelcomeScreen.tsx
│           └── WelcomeScreen.css
├── requirements.txt            # Python dependencies
├── README.md                   # This file
└── LICENSE                     # License information
```

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 16+ and npm (for frontend)
- Jupyter Notebook or JupyterLab
- WhatsApp chat export file

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aatmiyasilwal/WhatsAppWrapped.git
   cd WhatsAppWrapped
   ```

2. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Install spaCy English model** (for Named Entity Recognition)
   ```bash
   python -m spacy download en_core_web_sm
   ```

4. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

5. **Export your WhatsApp chat**
   - Open WhatsApp on your phone
   - Go to the chat you want to analyze
   - Tap on contact/group name → Export Chat → Without Media
   - Save the `.txt` file to the `data/` folder

---

### Usage

#### 🔧 **Backend Analysis**

1. **Configure the project**
   - Update `config.yml` with your chat file path
   - Adjust any parsing settings if needed

2. **Parse the chat data**
   ```bash
   jupyter notebook whatsapp_parser.ipynb
   ```
   - Run all cells to parse your WhatsApp export
   - This creates `whatsapp_parsed_data.csv`

3. **Run the analysis**
   ```bash
   jupyter notebook public_whatsapp_analysis.ipynb
   ```
   - Execute cells to generate comprehensive analysis
   - Export graphs as JSON for frontend integration

## 🛠️ Configuration

The `config.yml` file allows you to customize:

```yaml
data:
  input_file: "data/your_chat_file.txt"
  output_file: "data/whatsapp_parsed_data.csv"
  encoding: "utf-8"
parsing:
  max_errors_to_show: 10
  
display:
  max_sample_messages: 5
```

## 🔧 Dependencies

### **Backend (Python)**
- **pandas**: Data manipulation and analysis
- **matplotlib/seaborn**: Static visualizations
- **plotly**: Interactive charts
- **textblob**: Sentiment analysis
- **spacy**: Named entity recognition
- **wordcloud**: Word cloud generation
- **emoji**: Emoji processing
- **PyYAML**: Configuration file handling

### **Frontend (TypeScript/React)**
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Framer Motion**: Smooth animations and transitions
- **CSS3**: Modern styling with gradients and effects
- **Plotly.js**: Interactive data visualizations

## 📝 Data Privacy

This tool processes WhatsApp chat data locally on your machine. No data is sent to external servers. Please ensure you have permission from all participants before analyzing shared conversations.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.

---