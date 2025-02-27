# Cloud Architect Portfolio

A modern, responsive portfolio website built with Next.js and TailwindCSS, designed specifically for AWS Cloud Architects to showcase their expertise, certifications, and projects.

![Portfolio Preview](/placeholder.svg)

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌍 Multilingual support (English/Spanish)
- 🎠 Interactive certification carousel
- 🔄 Smooth scroll navigation
- 🌙 Light/Dark mode support
- ⚡ Fast performance
- 📊 AWS certification showcase
- 🛠 Tech stack visualization

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel component
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17 or later
- Git

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/cloud-architect-portfolio.git
cd cloud-architect-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a `.env.local` file in the root directory and add any necessary environment variables:
\`\`\`bash
NEXT_PUBLIC_SITE_URL=your-site-url
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
cloud-architect-portfolio/
├── app/                    # Next.js app directory
│   ├── components/        # React components
│   ├── context/          # React context providers
│   ├── i18n/            # Internationalization
│   └── page.tsx         # Main page component
├── public/               # Static files
├── styles/              # Global styles
└── components/          # Shared components
\`\`\`

## Customization

### Content

1. Update the content in \`app/i18n/translations.ts\` for both English and Spanish versions
2. Modify the certification data in \`app/components/certification-carousel.tsx\`
3. Update the tech stack in \`app/components/tech-stack.tsx\`
4. Add your own projects in the projects section of \`app/page.tsx\`

### Styling

1. Modify the theme in \`app/globals.css\`
2. Update the TailwindCSS configuration in \`tailwind.config.js\`
3. Customize component styles in their respective files

## Deployment

### Deploying to Vercel

The easiest way to deploy your portfolio is to use [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Vercel will detect it as a Next.js app and set up the build configuration automatically
4. Your site will be deployed to a URL like \`https://your-portfolio.vercel.app\`

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Other Deployment Options

You can also deploy to other platforms that support Next.js:

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Start the production server:
\`\`\`bash
npm start
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/cloud-architect-portfolio](https://github.com/yourusername/cloud-architect-portfolio)

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide Icons](https://lucide.dev/) for the icons
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the awesome React framework
\`\`\`

Remember to:
1. Replace placeholder URLs with your actual repository and deployment URLs
2. Update contact information with your actual details
3. Add your own project screenshots and documentation
4. Customize the license according to your preferences
5. Update environment variables as needed for your specific configuration

