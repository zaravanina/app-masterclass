# Heydays Masterclass – Next.js + Umbraco Data Mapping

This repository was created for a masterclass at Heydays where visiting students learned how we work with data coming from Umbraco in a Next.js environment.

The goal of the session was to practice mapping content blocks from Umbraco, working with given types, and learning how to handle arrays, objects, and conditional rendering in React.

⸻

## 🚀 Getting Started

Run the development server with your preferred package manager:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open http://localhost:3000 in your browser to see the app.

You can start editing the project by modifying app/page.tsx or app/[...path]/page.tsx.
Changes are reflected immediately thanks to hot reloading.

⸻

## 📝 Exercises

Students were given predefined types and asked to implement the following tasks: 1. Text Block
• Add a tagline to the text block. 2. Image Block
• Add crop support to the image.
• Add a caption below the image. 3. Text Columns Block
• Map out all columns inside the block.
• Display the columns next to each other. 4. Text + Image Block
• Map through text/image combinations.
• Respect the data indicating whether the image should appear on the left or right side.

💡 Bonus task: Some blocks also contain a background color value in the data — implement conditional rendering to apply these styles.

⸻

## 🎯 Purpose of the Repo

    •	Serve as a learning sandbox for students who attended the masterclass.
    •	Provide a reference boilerplate for anyone who wants to start a Next.js project that integrates with Umbraco data.
    •	Encourage exploration of how to:
    •	Map and render dynamic content blocks.
    •	Work with TypeScript types for structured content.
    •	Use console logging to understand data shapes.

⸻

## 📚 Learn More

    •	Next.js Documentation – framework features and API.
    •	Umbraco Documentation – CMS details and integration guides.
    •	Learn Next.js – interactive Next.js tutorial.
