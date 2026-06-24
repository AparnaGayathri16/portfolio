/* ============================================================
   TECH ICON REGISTRY
   Maps skill / tech names → an icon spec.
   - `cdn` slug uses https://cdn.simpleicons.org (official brand marks)
   - `svg` is a single-color inline SVG that inherits the accent color
   Add new entries here as more skills appear.
============================================================ */
(function () {
  const ACCENT_HEX = '8b6fd7'; // matches CSS --accent default (lavender)

  const ICONS = {
    /* ===================================================================
       LANGUAGES (brand logos via simpleicons CDN)
    =================================================================== */
    'python':       { type: 'cdn', slug: 'python',          color: '3776AB' },
    'javascript':   { type: 'cdn', slug: 'javascript',      color: 'F7DF1E' },
    'typescript':   { type: 'cdn', slug: 'typescript',      color: '3178C6' },
    'java':         { type: 'cdn', slug: 'openjdk',         color: '437291' },
    'c':            { type: 'cdn', slug: 'c',               color: 'A8B9CC' },
    'c++':          { type: 'cdn', slug: 'cplusplus',       color: '00599C' },
    'cpp':          { type: 'cdn', slug: 'cplusplus',       color: '00599C' },
    'c#':           { type: 'cdn', slug: 'sharp',           color: '239120' },
    'csharp':       { type: 'cdn', slug: 'sharp',           color: '239120' },
    'go':           { type: 'cdn', slug: 'go',              color: '00ADD8' },
    'golang':       { type: 'cdn', slug: 'go',              color: '00ADD8' },
    'rust':         { type: 'cdn', slug: 'rust',            color: '000000' },
    'ruby':         { type: 'cdn', slug: 'ruby',            color: 'CC342D' },
    'php':          { type: 'cdn', slug: 'php',             color: '777BB4' },
    'swift':        { type: 'cdn', slug: 'swift',           color: 'F05138' },
    'kotlin':       { type: 'cdn', slug: 'kotlin',          color: '7F52FF' },
    'scala':        { type: 'cdn', slug: 'scala',           color: 'DC322F' },
    'r':            { type: 'cdn', slug: 'r',               color: '276DC3' },
    'julia':        { type: 'cdn', slug: 'julia',           color: '9558B2' },
    'matlab':       { type: 'cdn', slug: 'mathworks',       color: '0076A8' },
    'html':         { type: 'cdn', slug: 'html5',           color: 'E34F26' },
    'html5':        { type: 'cdn', slug: 'html5',           color: 'E34F26' },
    'css':          { type: 'cdn', slug: 'css3',            color: '1572B6' },
    'css3':         { type: 'cdn', slug: 'css3',            color: '1572B6' },
    'bash':         { type: 'cdn', slug: 'gnubash',         color: '4EAA25' },
    'shell':        { type: 'cdn', slug: 'gnubash',         color: '4EAA25' },
    'sql':          { type: 'cdn', slug: 'mysql',           color: '4479A1' },

    /* ===================================================================
       WEB / APP FRAMEWORKS
    =================================================================== */
    'react':        { type: 'cdn', slug: 'react',           color: '61DAFB' },
    'react native': { type: 'cdn', slug: 'react',           color: '61DAFB' },
    'vue':          { type: 'cdn', slug: 'vuedotjs',        color: '4FC08D' },
    'vue.js':       { type: 'cdn', slug: 'vuedotjs',        color: '4FC08D' },
    'angular':      { type: 'cdn', slug: 'angular',         color: 'DD0031' },
    'svelte':       { type: 'cdn', slug: 'svelte',          color: 'FF3E00' },
    'next.js':      { type: 'cdn', slug: 'nextdotjs',       color: '000000' },
    'nextjs':       { type: 'cdn', slug: 'nextdotjs',       color: '000000' },
    'nuxt':         { type: 'cdn', slug: 'nuxtdotjs',       color: '00DC82' },
    'node.js':      { type: 'cdn', slug: 'nodedotjs',       color: '339933' },
    'nodejs':       { type: 'cdn', slug: 'nodedotjs',       color: '339933' },
    'express':      { type: 'cdn', slug: 'express',         color: '000000' },
    'django':       { type: 'cdn', slug: 'django',          color: '092E20' },
    'flask':        { type: 'cdn', slug: 'flask',           color: '000000' },
    'fastapi':      { type: 'cdn', slug: 'fastapi',         color: '009688' },
    'rest apis':    { type: 'cdn', slug: 'fastapi',         color: '009688' },
    'spring':       { type: 'cdn', slug: 'spring',          color: '6DB33F' },
    'spring boot':  { type: 'cdn', slug: 'springboot',      color: '6DB33F' },
    'rails':        { type: 'cdn', slug: 'rubyonrails',     color: 'D30001' },
    '.net':         { type: 'cdn', slug: 'dotnet',          color: '512BD4' },
    'dotnet':       { type: 'cdn', slug: 'dotnet',          color: '512BD4' },
    'graphql':      { type: 'cdn', slug: 'graphql',         color: 'E10098' },

    /* ===================================================================
       AI / ML / DEEP LEARNING — frameworks & libraries
    =================================================================== */
    'tensorflow':   { type: 'cdn', slug: 'tensorflow',      color: 'FF6F00' },
    'pytorch':      { type: 'cdn', slug: 'pytorch',         color: 'EE4C2C' },
    'keras':        { type: 'cdn', slug: 'keras',           color: 'D00000' },
    'scikit-learn': { type: 'cdn', slug: 'scikitlearn',     color: 'F7931E' },
    'sklearn':      { type: 'cdn', slug: 'scikitlearn',     color: 'F7931E' },
    'pandas':       { type: 'cdn', slug: 'pandas',          color: '150458' },
    'numpy':        { type: 'cdn', slug: 'numpy',           color: '013243' },
    'scipy':        { type: 'cdn', slug: 'scipy',           color: '8CAAE6' },
    'jupyter':      { type: 'cdn', slug: 'jupyter',         color: 'F37626' },
    'mlflow':       { type: 'cdn', slug: 'mlflow',          color: '0194E2' },
    'kaggle':       { type: 'cdn', slug: 'kaggle',          color: '20BEFF' },
    'plotly':       { type: 'cdn', slug: 'plotly',          color: '3F4F75' },

    /* ===================================================================
       COMPUTER VISION
    =================================================================== */
    'opencv':       { type: 'cdn', slug: 'opencv',          color: '5C3EE8' },

    /* ===================================================================
       NLP / LLM ECOSYSTEM
    =================================================================== */
    'hugging face': { type: 'cdn', slug: 'huggingface',     color: 'FFD21E' },
    'huggingface':  { type: 'cdn', slug: 'huggingface',     color: 'FFD21E' },
    'openai':       { type: 'cdn', slug: 'openai',          color: '412991' },
    'gpt':          { type: 'cdn', slug: 'openai',          color: '412991' },
    'chatgpt':      { type: 'cdn', slug: 'openai',          color: '412991' },
    'anthropic':    { type: 'cdn', slug: 'anthropic',       color: '191919' },
    'claude':       { type: 'cdn', slug: 'anthropic',       color: '191919' },
    'gemini':       { type: 'cdn', slug: 'googlegemini',    color: '8E75B2' },
    'meta':         { type: 'cdn', slug: 'meta',            color: '0467DF' },
    'langchain':    { type: 'cdn', slug: 'langchain',       color: '1C3C3C' },
    'ollama':       { type: 'cdn', slug: 'ollama',          color: '000000' },

    /* ===================================================================
       CLOUD
    =================================================================== */
    'aws':          { type: 'cdn', slug: 'amazonwebservices', color: '232F3E' },
    'amazon web services': { type: 'cdn', slug: 'amazonwebservices', color: '232F3E' },
    'azure':        { type: 'cdn', slug: 'microsoftazure',  color: '0078D4' },
    'microsoft azure': { type: 'cdn', slug: 'microsoftazure', color: '0078D4' },
    'gcp':          { type: 'cdn', slug: 'googlecloud',     color: '4285F4' },
    'google cloud': { type: 'cdn', slug: 'googlecloud',     color: '4285F4' },
    'firebase':     { type: 'cdn', slug: 'firebase',        color: 'DD2C00' },
    'vercel':       { type: 'cdn', slug: 'vercel',          color: '000000' },
    'netlify':      { type: 'cdn', slug: 'netlify',         color: '00C7B7' },
    'heroku':       { type: 'cdn', slug: 'heroku',          color: '430098' },
    'digitalocean': { type: 'cdn', slug: 'digitalocean',    color: '0080FF' },
    'cloudflare':   { type: 'cdn', slug: 'cloudflare',      color: 'F38020' },

    /* ===================================================================
       DEVOPS / INFRA / VERSIONING
    =================================================================== */
    'docker':       { type: 'cdn', slug: 'docker',          color: '2496ED' },
    'kubernetes':   { type: 'cdn', slug: 'kubernetes',      color: '326CE5' },
    'terraform':    { type: 'cdn', slug: 'terraform',       color: '7B42BC' },
    'ansible':      { type: 'cdn', slug: 'ansible',         color: 'EE0000' },
    'jenkins':      { type: 'cdn', slug: 'jenkins',         color: 'D24939' },
    'github actions': { type: 'cdn', slug: 'githubactions', color: '2088FF' },
    'circleci':     { type: 'cdn', slug: 'circleci',        color: '343434' },
    'travis':       { type: 'cdn', slug: 'travisci',        color: '3EAAAF' },
    'git':          { type: 'cdn', slug: 'git',             color: 'F05032' },
    'github':       { type: 'cdn', slug: 'github',          color: '181717' },
    'gitlab':       { type: 'cdn', slug: 'gitlab',          color: 'FC6D26' },
    'bitbucket':    { type: 'cdn', slug: 'bitbucket',       color: '0052CC' },
    'nginx':        { type: 'cdn', slug: 'nginx',           color: '009639' },
    'apache':       { type: 'cdn', slug: 'apache',          color: 'D22128' },
    'linux':        { type: 'cdn', slug: 'linux',           color: 'FCC624' },
    'ubuntu':       { type: 'cdn', slug: 'ubuntu',          color: 'E95420' },

    /* ===================================================================
       DATABASES
    =================================================================== */
    'mysql':        { type: 'cdn', slug: 'mysql',           color: '4479A1' },
    'postgresql':   { type: 'cdn', slug: 'postgresql',      color: '4169E1' },
    'postgres':     { type: 'cdn', slug: 'postgresql',      color: '4169E1' },
    'mongodb':      { type: 'cdn', slug: 'mongodb',         color: '47A248' },
    'redis':        { type: 'cdn', slug: 'redis',           color: 'DC382D' },
    'sqlite':       { type: 'cdn', slug: 'sqlite',          color: '003B57' },
    'cassandra':    { type: 'cdn', slug: 'apachecassandra', color: '1287B1' },
    'neo4j':        { type: 'cdn', slug: 'neo4j',           color: '4581C3' },
    'elasticsearch':{ type: 'cdn', slug: 'elasticsearch',   color: '005571' },
    'dynamodb':     { type: 'cdn', slug: 'amazondynamodb',  color: '4053D6' },
    'snowflake':    { type: 'cdn', slug: 'snowflake',       color: '29B5E8' },
    'bigquery':     { type: 'cdn', slug: 'googlebigquery',  color: '669DF6' },

    /* ===================================================================
       BIG DATA / STREAMING
    =================================================================== */
    'spark':        { type: 'cdn', slug: 'apachespark',     color: 'E25A1C' },
    'hadoop':       { type: 'cdn', slug: 'apachehadoop',    color: '66CCFF' },
    'kafka':        { type: 'cdn', slug: 'apachekafka',     color: '231F20' },
    'airflow':      { type: 'cdn', slug: 'apacheairflow',   color: '017CEE' },

    /* ===================================================================
       DEV TOOLS / IDEs / DESIGN
    =================================================================== */
    'vs code':      { type: 'cdn', slug: 'visualstudiocode',color: '007ACC' },
    'vscode':       { type: 'cdn', slug: 'visualstudiocode',color: '007ACC' },
    'intellij':     { type: 'cdn', slug: 'intellijidea',    color: '000000' },
    'pycharm':      { type: 'cdn', slug: 'pycharm',         color: '21D789' },
    'postman':      { type: 'cdn', slug: 'postman',         color: 'FF6C37' },
    'figma':        { type: 'cdn', slug: 'figma',           color: 'F24E1E' },
    'sketch':       { type: 'cdn', slug: 'sketch',          color: 'F7B500' },
    'notion':       { type: 'cdn', slug: 'notion',          color: '000000' },
    'slack':        { type: 'cdn', slug: 'slack',           color: '4A154B' },
    'jira':         { type: 'cdn', slug: 'jira',            color: '0052CC' },
    'webpack':      { type: 'cdn', slug: 'webpack',         color: '8DD6F9' },
    'vite':         { type: 'cdn', slug: 'vite',            color: '646CFF' },

    /* ===================================================================
       ABSTRACT CONCEPTS — custom inline SVGs, inherit accent color
    =================================================================== */
    'artificial intelligence': { type: 'svg', svg:
      '<path d="M9.5 3.5a2.5 2.5 0 0 1 5 0v.5a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1 0 5v1a2.5 2.5 0 0 1-2.5 2.5v.5a2.5 2.5 0 0 1-5 0v-.5A2.5 2.5 0 0 1 7 13.5v-1a2.5 2.5 0 0 1 0-5v-1A2.5 2.5 0 0 1 9.5 4v-.5z"/><circle cx="10" cy="9" r="1"/><circle cx="14" cy="9" r="1"/><path d="M9 12.5c.5.5 1.5 1 3 1s2.5-.5 3-1"/><path d="M12 17v3M10 20h4"/>' },

    'machine learning': { type: 'svg', svg:
      '<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="6" r="1.5"/><circle cx="12" cy="18" r="1.5"/><path d="M7 6.5l3.5 5M7 17.5l3.5-5M13.5 6.5l4 5M13.5 17.5l4-5"/>' },

    'deep learning': { type: 'svg', svg:
      '<circle cx="4" cy="6" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="4" cy="18" r="1.5"/><circle cx="12" cy="7" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="17" r="1.5"/><circle cx="20" cy="9" r="1.5"/><circle cx="20" cy="15" r="1.5"/><path d="M5.5 6L10.5 7M5.5 6L10.5 12M5.5 12L10.5 7M5.5 12L10.5 12M5.5 12L10.5 17M5.5 18L10.5 12M5.5 18L10.5 17M13.5 7L18.5 9M13.5 7L18.5 15M13.5 12L18.5 9M13.5 12L18.5 15M13.5 17L18.5 15"/>' },

    'computer vision': { type: 'svg', svg:
      '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/>' },

    'natural language processing': { type: 'svg', svg:
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none"/><circle cx="13" cy="11" r="0.8" fill="currentColor" stroke="none"/><circle cx="17" cy="11" r="0.8" fill="currentColor" stroke="none"/>' },

    'nlp': { type: 'svg', svg:
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none"/><circle cx="13" cy="11" r="0.8" fill="currentColor" stroke="none"/><circle cx="17" cy="11" r="0.8" fill="currentColor" stroke="none"/>' },

    'llm': { type: 'svg', svg:
      '<rect x="3" y="5" width="18" height="13" rx="3"/><path d="M9 11h6M9 14h3"/><path d="M19 4l1 1.5L21.5 6L20 7l-1 1.5L18 7l-1.5-1L18 5z" fill="currentColor" stroke="none"/>' },

    'large language model': { type: 'svg', svg:
      '<rect x="3" y="5" width="18" height="13" rx="3"/><path d="M9 11h6M9 14h3"/><path d="M19 4l1 1.5L21.5 6L20 7l-1 1.5L18 7l-1.5-1L18 5z" fill="currentColor" stroke="none"/>' },

    'generative ai': { type: 'svg', svg:
      '<path d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2z"/><circle cx="19" cy="5" r="1.5"/><circle cx="5" cy="19" r="1.5"/>' },

    'genai': { type: 'svg', svg:
      '<path d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2z"/><circle cx="19" cy="5" r="1.5"/><circle cx="5" cy="19" r="1.5"/>' },

    'prompt engineering': { type: 'svg', svg:
      '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10l2 2-2 2M11 14h6"/>' },

    'rag': { type: 'svg', svg:
      '<rect x="2" y="6" width="8" height="12" rx="2"/><rect x="14" y="6" width="8" height="12" rx="2"/><path d="M10 12h4"/><polyline points="13 9 14 12 13 15"/>' },

    'transformers': { type: 'svg', svg:
      '<rect x="3" y="10" width="4" height="4"/><rect x="10" y="6" width="4" height="4"/><rect x="10" y="14" width="4" height="4"/><rect x="17" y="10" width="4" height="4"/><path d="M7 12h3M14 12h3M12 10V8M12 16v-2"/>' },

    'reinforcement learning': { type: 'svg', svg:
      '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>' },

    'neural networks': { type: 'svg', svg:
      '<circle cx="5" cy="7" r="1.8"/><circle cx="5" cy="17" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="7" r="1.8"/><circle cx="19" cy="17" r="1.8"/><path d="M6.5 8L10.5 11M6.5 16L10.5 13M13.5 11L17.5 8M13.5 13L17.5 16"/>' },

    'image processing': { type: 'svg', svg:
      '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="M21 16l-5-5L7 21"/>' },

    'object detection': { type: 'svg', svg:
      '<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="8" width="6" height="5"/><circle cx="17" cy="16" r="2"/>' },

    'segmentation': { type: 'svg', svg:
      '<path d="M3 3h8v8H3z"/><path d="M13 13h8v8h-8z" fill="currentColor" opacity="0.25"/><path d="M13 3h8v8h-8z" stroke-dasharray="2 2"/><path d="M3 13h8v8H3z" stroke-dasharray="2 2"/>' },

    'ocr': { type: 'svg', svg:
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h2M11 8h6M7 12h10M7 16h6"/>' },

    'model training': { type: 'svg', svg:
      '<polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/>' },

    'data architecture': { type: 'svg', svg:
      '<ellipse cx="12" cy="5" rx="8" ry="2.5"/><path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5"/><path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6"/>' },

    'data pipelines': { type: 'svg', svg:
      '<rect x="2" y="9" width="6" height="6" rx="1"/><rect x="16" y="9" width="6" height="6" rx="1"/><circle cx="12" cy="12" r="2"/><line x1="8" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="16" y2="12"/>' },

    'data analysis': { type: 'svg', svg:
      '<line x1="3" y1="21" x2="21" y2="21"/><rect x="5" y="13" width="3" height="8"/><rect x="10.5" y="8" width="3" height="13"/><rect x="16" y="4" width="3" height="17"/>' },

    'data science': { type: 'svg', svg:
      '<line x1="3" y1="21" x2="21" y2="21"/><polyline points="4 17 9 12 13 14 20 7"/><circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="13" cy="14" r="1.5" fill="currentColor" stroke="none"/>' },

    'etl': { type: 'svg', svg:
      '<path d="M3 7h6l3 3 3-3h6"/><path d="M3 12h6l3 3 3-3h6"/><path d="M3 17h6l3 3 3-3h6"/>' },

    'cloud technologies': { type: 'svg', svg:
      '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>' },

    'cloud': { type: 'svg', svg:
      '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>' },

    'cloud computing': { type: 'svg', svg:
      '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>' },

    'iot': { type: 'svg', svg:
      '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/>' },

    'ai systems': { type: 'svg', svg:
      '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="15" x2="22" y2="15"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="15" x2="4" y2="15"/>' },

    'ai': { type: 'svg', svg:
      '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="15" x2="22" y2="15"/>' },

    'healthcare ai': { type: 'svg', svg:
      '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' },

    'architecture': { type: 'svg', svg:
      '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>' },

    'research': { type: 'svg', svg:
      '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/>' },

    'agile': { type: 'svg', svg:
      '<path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 4 21 10 15 10"/>' },

    'scrum': { type: 'svg', svg:
      '<circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 9v6"/>' },

    'ci/cd': { type: 'svg', svg:
      '<path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 4 21 10 15 10"/><path d="M3 12a9 9 0 0 0 3 6.7"/><polyline points="3 20 3 14 9 14"/>' },

    'api': { type: 'svg', svg:
      '<rect x="3" y="9" width="18" height="6" rx="1"/><circle cx="7" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="11" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/>' },

    'microservices': { type: 'svg', svg:
      '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6M9 18h6M6 9v6M18 9v6"/>' },
  };

  const FALLBACK = { type: 'svg', svg:
    '<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/>' };

  function buildIconHTML(name, size) {
    const key = String(name || '').trim().toLowerCase();
    const spec = ICONS[key] || FALLBACK;
    if (spec.type === 'cdn') {
      return `<img class="ti-img" loading="lazy" alt="" width="${size}" height="${size}" src="https://cdn.simpleicons.org/${spec.slug}/${spec.color}">`;
    }
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${spec.svg}</svg>`;
  }

  /* Decorate every static .chip and dynamically-rendered .tag with its icon.
     - Idempotent: skips elements already decorated (data-iconified="1").
     - Tag size kept small (13px) so it fits inside the pill cleanly.
     - Chip size slightly larger (15px) for the skills section. */
  function decorate(root) {
    root = root || document;

    root.querySelectorAll('.chip:not([data-iconified])').forEach(el => {
      const label = el.textContent.trim();
      if (!label) return;
      el.setAttribute('data-iconified', '1');
      el.innerHTML = `<span class="chip-icon">${buildIconHTML(label, 15)}</span><span class="chip-label">${label}</span>`;
    });

    root.querySelectorAll('.tag:not([data-iconified])').forEach(el => {
      const label = el.textContent.trim();
      if (!label) return;
      el.setAttribute('data-iconified', '1');
      el.innerHTML = `<span class="tag-icon">${buildIconHTML(label, 13)}</span><span class="tag-label">${label}</span>`;
    });
  }

  /* Public API */
  window.TechIcons = { decorate, buildIconHTML };

  /* Initial pass for static markup */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => decorate());
  } else {
    decorate();
  }

  /* Re-decorate when JSON-rendered cards arrive — we observe the document body
     for added subtrees containing .tag / .chip. Cheap because batched. */
  const mo = new MutationObserver(records => {
    let needs = false;
    for (const r of records) {
      for (const n of r.addedNodes) {
        if (n.nodeType === 1 && (n.querySelector?.('.chip,.tag') || n.matches?.('.chip,.tag'))) {
          needs = true; break;
        }
      }
      if (needs) break;
    }
    if (needs) decorate();
  });
  mo.observe(document.body, { childList: true, subtree: true });
})();
