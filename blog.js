// JavaScript for your blog

// Sample data for blog posts (replace with actual data)
const blogData = [
    {
        id: 1,
        title: "Blog Post Title 1",
        author: "Your Name",
        date: "September 15, 2023",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        likes: 0,
        imageUrl: "image1.jpg", // Featured image URL
        category: "Category 1",
        tags: ["Tag 1", "Tag 2"],
    },
    // Add more blog posts as needed
];

// Function to display blog posts
function displayBlogPosts() {
    const blogContainer = document.querySelector(".blog-container");

    blogData.forEach((post) => {
        const postElement = document.createElement("article");
        postElement.classList.add("blog-post");

        // Create and append HTML elements for post content (title, author, date, etc.)

        // Create and append featured image
        const featuredImage = document.createElement("img");
        featuredImage.src = post.imageUrl;
        featuredImage.alt = post.title;
        postElement.appendChild(featuredImage);

        // Create and append "Read More" link
        const readMoreLink = document.createElement("a");
        readMoreLink.classList.add("read-more");
        readMoreLink.href = "#"; // Link to full blog post
        readMoreLink.textContent = "Read More";
        postElement.appendChild(readMoreLink);

        // Create and append like button
        const likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        likeButton.dataset.postId = post.id;
        likeButton.textContent = "Like";
        postElement.appendChild(likeButton);

        // Append post element to the container
        blogContainer.appendChild(postElement);
    });
}

// Function to handle liking a post (sample implementation)
function likePost(postId) {
    const post = blogData.find((post) => post.id === postId);
    if (post) {
        post.likes += 1;
        // Update the like count in the UI
        const likeCountElement = document.querySelector(`[data-post-id="${postId}"]`);
        if (likeCountElement) {
            likeCountElement.textContent = `${post.likes} Likes`;
        }
    }
}

// Display blog posts when the page loads
displayBlogPosts();

// Event listener for liking a post
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("like-button")) {
        const postId = parseInt(event.target.dataset.postId);
        likePost(postId);
    }
});




