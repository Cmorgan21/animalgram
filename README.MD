# Animal Gram

![Responsive Mockup](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717018761/amiresponsive_ol6ode.png)

## Project Objective

**Animal Gram** is an innovative social media platform where users can share photos and moments of their pets and favorite animals. Our mission is to create a space where animal lovers can connect, share, and inspire each other. Users can create their own profiles, post photos, follow other users, and engage in conversations about their beloved pets.

View the live project [here](https://animalgram-880788cab506.herokuapp.com/)

## Table Of Contents
- [User Experience Design (UX)](#user-experience-design-ux)
- [The Strategy Plane](#the-strategy-plane)
- [Project Objective](#project-objective)
- [Agile Project Management](#agile-project-management)
- [User Stories](#user-stories)
- [The Structure Plane](#the-structure-plane)
- [Project Structure](#project-structure)
- [Features](#features)
- [Future Features](#future-features)
- [The Skeleton Plane](#the-skeleton-plane)
- [Wireframes](#wireframes)
- [Database Structure](#database-structure)
- [The Surface Plane](#the-surface-plane)
- [Design](#design)
- [Technologies Used Frontend](#technologies-used-frontend)
- [Technologies Used Backend](#technologies-used-backend)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)


## UX


## The Strategy Plane

### Project Objective
The objective of this project is to build a content-sharing web application for animal enthusiasts, allowing users to connect, share their pet's moments, and interact with the published content. The platform allows users to view, create, edit, delete, like, and comment on posts. Users can also view, create, and edit their own profiles, follow each other, and engage with others' shared content.

### The Strategy Plane

#### Project Objective
The objective of this project is to build a content-sharing web application for animal enthusiasts, allowing users to connect, share their pet's moments, and interact with the published content. The platform allows users to view, create, edit, delete, like, and comment on posts. Users can also view, create, and edit their own profiles, follow each other, and engage with others' shared content.

### Agile Management

This project was managed through the application of agile methodologies, establishing an efficient workflow by implementing a board using GitHub Projects, which served as a pivotal project management tool. The board played a crucial role in visualizing tasks, maintaining optimal work-in-progress limits, and enhancing overall workflow efficiency and time scaling.

The development process was anchored in a step-by-step approach. It commenced by focusing on fulfilling the must-have requirements to ensure the delivery of core functionalities. 

Subsequently, the “should-have” features were addressed, followed by the incorporation of the “could-have” elements. This approach prioritized essential project prerequisites while allowing the integration of desirable features in an iterative, capacity-based manner.

### User Stories

#### Navigation & Authentication

### User Stories

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Navigation   | As a user, I want a navigation bar available on all pages so that I can easily navigate between different sections of the application. | [X]       |
| Routing      | As a user, I want quick and seamless transitions between pages, allowing me to view content without the need for page refreshing.       | [X]       |
| Sign up      | As a user, I want to create a new account so that I can access all the features available to registered users.                         | [X]       |
| Sign in      | As a user, I want to sign in to the app to access functionality available to logged-in users.                                          | [X]       |
| Logged in Status | As a user, I want to easily determine whether I am logged in or not, ensuring that I can log in if needed.                        | [X]       |
| Refreshing access tokens | As a user, I want my logged-in status to be maintained until I choose to log out, ensuring a seamless user experience.   | [X]       |
| Conditional rendering | As a logged-out user, I want to see sign-in and sign-up options so that I can quickly and conveniently access these actions.  | [X]       |
| Avatar       | As a user, I want to view user avatars (profile pictures) to easily identify other users within the application.                       | [X]       |

#### Posts

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Create posts | To share my content, I can create posts as a logged-in user.                                                                           | [X]       |
| Edit post    | As the post owner, I have the ability to edit the post text, image, and tags. This allows me to make corrections or updates to my post after its creation. | [X]       |
| Delete a post| I, as the post owner, can delete a post, ensuring it is no longer available to view on the app.                                        | [X]       |
| View a post  | To learn more about a specific post, I can view its details as a user.                                                                 | [X]       |
| Posts list   | As a user, I can see a list of posts ordered by most recent first. This provides me with an overview of what people are posting.       | [X]       |
| Search Posts | I can search for posts using keywords and tags as a user. This feature helps me find posts and user profiles that align with my interests. | [X]    |
| View posts of followed users | To stay updated with the posts from users I follow, I can view content filtered by these users as a logged-in user.   | [X]       |

#### Likes

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Like a post  | As a user, I have the ability to like a post when logged in. This allows me to express my support for posts that capture my interest.  | [X]       |
| Unlike a post| As a user, I am able to unlike a post when logged in, offering the flexibility to change my mind regarding posts I wish to support.    | [X]       |
| View liked posts | In my role as a user, I can easily access the posts I've liked while logged in. This feature ensures I can find these posts conveniently at a later date. | [X]  |

#### Comments

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Share Thoughts via Comments | As a user, when logged in, I can contribute comments to a post, providing me with the opportunity to express my thoughts and opinions about the post content. | [X]  |
| Display Comment Timestamp | In my user role, I can view the time elapsed since a comment was made. This feature allows me to determine how recent or dated a particular comment is. | [X]  |
| Read User Comments | In the capacity of a user, I have the ability to read comments on posts. This functionality enables me to gain insights into what other users think and express about the posts. | [X]  |
| Comment Removal | As a comment owner, I can delete my own comments when logged in, providing me with control over the removal of my comments from the application. | [X]  |
| Edit Existing Comments | When logged in and acting as a comment owner, I can edit my comments. This empowers me to make corrections or updates to my existing comments as needed. | [X]  |

#### Profiles

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Explore User Profiles | As a user, I can explore the profiles of other users. This feature allows me to discover their posts and events, gain insights into their activity (including the number of posts, events, followers, and users followed), and learn more about their backgrounds, careers, and personal information. | [X]  |
| Discover Popular Profiles | In my user role, I have the ability to discover a list of the most popular profiles. This functionality enables me to identify profiles that are widely followed and popular within the community. | [X]  |
| Manage User Connections | When logged in as a user, I can choose to follow or unfollow other users. This control allows me to curate the posts I see in my feed by selecting or deselecting specific users to follow. | [X]  |
| Review a User's Posts | In my role as a user, I can access and review all posts published by a specific user. This enables me to catch up on their recent posts or decide whether to follow their content. | [X]  |
| Explore a User's Events | As a user, I can explore the events listed by a specific user. This provides me with the opportunity to view their events and decide whether I want to follow their event updates. | [X]  |
| Customize Profile Information | While logged in, I can edit my profile to make changes to my profile picture and bio. This functionality allows me to keep my profile information up-to-date and relevant. | [X]  |
| Secure Profile Information | When logged in, I can update my username and password, ensuring that my display name can be modified, and my profile remains secure. | [X]  |

### Developer User Stories

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| View All Profiles | As a developer/superuser, I can access a comprehensive list of all profiles created, providing an overview of the entire user base. | [X]  |
| Inspect Individual Profile | In the role of a developer/superuser, I can delve into the details of an individual profile to access specific user data. | [X]  |
| Edit Personal Information | Being a developer/superuser, I have the ability to modify personal information within a profile when logged in. This enables users to keep their details up-to-date. | [X]  |
| Delete User Account | In the capacity of a developer/superuser, I can perform user account deletions, ensuring the option to remove profiles from the API. | [X]  |

#### Posts

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| List All Posts | As a developer/superuser, I can review a comprehensive list of all posts in one view, facilitating efficient post management. | [X]  |
| Access Single Post Details | In the role of a developer/superuser, I can view detailed information about a single post, including any associated comments. | [X]  |
| Create New Posts | Being a developer/superuser, I possess the capability to generate new posts, ensuring their display within the posts list. | [X]  |
| Edit Created Posts | In my role as a developer/superuser, I can amend the content of posts that I created, facilitating corrections or updates as necessary. | [X]  |
| Delete Created Posts | In the capacity of a developer/superuser, I can remove posts created by me, effectively eliminating post data from the API. | [X]  |

#### Comments

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Generate Comments | As a developer/superuser, I can create comments, associating them with specific posts, thus facilitating user interaction. | [X]  |
| View Comment List | In my role as a developer/superuser, I can retrieve a complete list of all comments created within the API, streamlining comment management. | [X]  |
| Access Individual Comment by ID | Being a developer/superuser, I can retrieve and view a single comment using its unique identifier. This capability allows for editing or deletion of the comment. | [X]  |
| Edit My Comments | As a developer/superuser, I can make edits to comments I've created, affording the ability to rectify or update the content. | [X]  |
| Delete My Comments | In the capacity of a developer/superuser, I can remove comments created by me, effectively eliminating comment data from the API. | [X]  |

#### Likes

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Create Liked Object | As a developer/superuser, I can establish a "liked" object linked to a single post, thereby enabling users to demonstrate interest in a post. | [X]  |
| Delete Liked Object | In the role of a developer/superuser, I can delete a "liked" object created by me, ensuring the ability to remove "liked" data from the API. | [X]  |
| Prevent Unauthorized Deletion | Being a developer/superuser, I can implement measures to prevent the unauthorized deletion of "liked" objects that I did not create. | [X]  |
| List All Liked Objects | In my capacity as a developer/superuser, I can access a comprehensive list of all "liked" objects created in the API, facilitating the management of these user interactions. | [X]  |

#### Followers

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Create a Follow | As a developer/superuser, I can establish a "follow" relationship with another user, allowing users to connect and receive updates. | [ X]  |
| View List of Follows | In my role as a developer/superuser, I can access a list of all "follows" created within the API, providing insights into user connections. | [X]  |
| Delete Follow | Being a developer/superuser, I can delete a "follow" relationship, offering users the option to unfollow another user's profile. | [X]  |

#### Search

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Implement Search Functionality | As an account holder or guest of the website, I can search for posts based on the text content of the posts. | [X]  |
| View a Grid of Posts | Users can search for posts and view a collective grid of all posts, ordered from newest at the top to oldest at the bottom. | [X]  |
| User Post and Picture | From the search page, a user can see the post, profile picture of the posted user, and the title of the post. | [X]  |

### Future Implementations

| Category     | User Story                                                                                     | Completed |
|--------------|-------------------------------------------------------------------------------------------------|-----------|
| Filter Posts by Category | In my role as a developer/superuser, I can enable category-based post filtering, allowing users to view posts related to a specific category. | []  |
| Posts based on Liked History | Provide users with posts similar to the ones they frequently like to give them more suggested content. | []  |
| View Followed Profiles Content | Being a developer/superuser, I can provide a feature that allows users to see posts exclusively from profiles they follow. | []  |
| Chat Functionality | As a developer/superuser, I can implement chat functionality, enabling users to communicate with each other and message in real time. |

## The Structure Plane

### Project Structure

Animal Gram exhibits two user experiences contingent upon the user's authentication status. Whether logged in or logged out, these states dictate varying content accessibility and user capabilities.

For logged-out users, the navigation bar provides access to the Home, About, Sign In, and Sign Up pages. Upon logging in, the user gains access to additional features within the Feed, encompassing Posts, Liked, Following, and the Profile Page and also adding and changing posts.

The transition to a logged-in state empowers users with the ability to perform actions beyond the scope of logged-out users:
Logged-in users can create posts, modify their profile details, including their username and password, manage their comments, express their preference for posts through likes and unlikes, and expand their network by following or unfollowing other users.

## Features

### Navigation

The navigation bar boasts an elegant and minimalist design, ensuring an exceptional user experience. Its appearance dynamically adapts based on your authentication status. On tablets and mobile devices, the navigation bar transforms into a user-friendly hamburger menu. 

![AnimalGramNavLoggedout](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013073/Screenshot_2024-05-29_at_20.58.07_axell9.png)

When a user is logged out, the following menu items are readily accessible:

- **Animal Gram Logo:** This logo serves as a constant presence across the site, providing all users with a convenient link back to the homepage.
- **Home:** Users can navigate to the "Home" section, where a diverse array of posts populates the platform.
- **About:** This link directs users to the "About" page, where they can gain deeper insights into the platform's mission and purpose.
- **Search:** This will allow users to view posts from newest to oldest in a grid-like format. With the user, user post, and post title.
- **Authentication:** For quick access, the "Sign In" and "Sign Up" icons are prominently displayed, offering seamless entry into the respective authentication processes.

When a user is logged in, a range of additional options becomes accessible:

![AnimalGramNavLoggedin](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013066/Screenshot_2024-05-29_at_20.59.49_ncy6zu.png)

- **Feed:** Logged-in users have access to a dynamic dropdown menu, allowing them to navigate to the "Feed" page, which includes posts. Here, they can explore content from profiles they follow, view posts they've liked, and manage their profile.
![Feed](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013073/Screenshot_2024-05-29_at_21.03.27_qdn6ea.png)


- **Authentication:** The authentication icons transform as well. Instead of displaying "Sign In" and "Sign Up" options, they now feature a direct link to the user's profile page and a convenient "Sign Out" option to exit the site.

- **Add Post:** For users who are logged in, links to create new posts are readily accessible.

![AddPost](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013067/Screenshot_2024-05-29_at_21.00.30_aghqeu.png)


- **Liked:** This allows users to see what posts they have liked and revisit their favorite posts.

![Liked](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013077/Screenshot_2024-05-29_at_21.02.52_g9rpfo.png)

### Authentication

Users who have not created an account can click on the Sign-Up link on the Navigation Bar to create a user account. The standard dj-rest/auth/registration user account signup process is used for this.


If a user has an Animal Gram user account, they can click on the Sign-In menu option in the Navigation Bar to sign into their account.

To sign out, already signed-in users can access the Sign-Out option in the Navigation Bar.

### Posts Page / Homepage

The Posts Page, which also serves as the website Homepage, consists of three main React components:

- **Popular Profiles Component**

![Popular Profiles](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013067/Screenshot_2024-05-29_at_20.58.20_mefmmu.png)

- **Posts**

![Posts](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013070/Screenshot_2024-05-29_at_20.58.40_rb6m5w.png)

#### Popular Profiles Component

The Popular Profiles Component is a prominent feature throughout the website. On larger screens, it appears to the right of all pages, while on smaller screens, it occupies the top section. This component utilizes a filter to rank all site users by their follower count, listing the top ten profiles on larger screens and the top four on smaller screens.

For users who aren't logged in, the component displays the profile avatar and the username. In contrast, logged-in users have the additional option to follow or unfollow the profile. Clicking on any profile avatar allows the user to view the complete profile page of that individual.

#### Posts

The Posts section showcases all posts created by users on the platform. Posts are retrieved from the API, sorted by creation date, with the most recent posts featured at the top in descending order.

Each post includes details about the user who created it, the date of creation, the written content, an image, location, and relevant tags. Users can also view the number of likes and comments on each post. Clicking on the post image or the comments count takes the user to the post's individual page.


### Feed

To access the feed pages, simply click on the 'Feed' option in the Navigation Bar. The Posts Feed page has a familiar layout reminiscent of the Posts Page. However, its function diverges in how content is filtered. On the feed page, it pulls all Posts from the API, but the magic happens with the applied filter. 

![Feed](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013073/Screenshot_2024-05-29_at_21.03.27_qdn6ea.png)

This filter ensures that only Posts created by profiles that the logged-in user follows are displayed. Keep in mind that this page is exclusively accessible to logged-in users. In cases where a user isn't following any profiles yet, a 'No Results Found' message will be thoughtfully presented.

### Create a Post

Logged-in users have the privilege to share their thoughts and experiences with the community by creating new posts. By selecting the 'Add Post' option from the Navigation Bar, users are seamlessly directed to the Create Post form. 
![AddPost](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013067/Screenshot_2024-05-29_at_21.00.30_aghqeu.png)


![Createapost](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013073/Screenshot_2024-05-29_at_21.03.27_qdn6ea.png)
This user-friendly form demands all essential fields to be filled, and it's worth noting that uploading an image is mandatory for successful submission. After submitting the form, the newly created post is swiftly available on the Posts Page. Users will be automatically redirected to the post's individual page, where they can view their masterpiece. Additionally, for every post created, the user's posts count increases, proudly displayed in their profile page stats for others to see their engagement and contribution.

### Post Page

The Post Page offers a detailed view of an individual post, presenting both post details and comments. Users can access this page by clicking on the post image or comment icon from the Posts Page or Posts Feed. If the user is the post's owner, they gain the ability to edit or delete the post by selecting the three dots next to the post's creation date.

![Post Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013070/Screenshot_2024-05-29_at_20.58.40_rb6m5w.png)

![Post Page Comment](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013073/Screenshot_2024-05-29_at_21.02.23_adebef.png)


Beneath the post details lies the comments section. In the absence of comments, users encounter a message indicating no comments have been posted. When users are not logged in, they can read published comments but cannot create comments until they log in. Once logged in, a comment form appears above existing comments, allowing users to share their thoughts on the post.

Choosing the "Delete" option removes the post from the API, making it invisible on the platform. Users are then redirected to the Post Create form, offering the option to create a new post. Opting for "Edit" redirects users to the Post Edit Form, pre-populated with the existing post's information. Users can modify this information, save the changes, and return to the Post Page, now featuring the updated post.

### Comments

On each Post Page, a "Post a Comment" button invites users to engage with that specific post. The comment form includes a single text input field for users to compose their comments. All fields are required, ensuring that comments are not published unless text is provided. Upon publishing a comment, the comment count visibly increments for that post.

![Comments](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013073/Screenshot_2024-05-29_at_21.02.23_adebef.png)

Comment owners who wish to make modifications to their comments after publishing have the option to edit or delete comments by using the three dots menu located to the right of the published comment.

### Profile Page

The Profile Page provides an in-depth look at a user's identity and activity on Animal Gram. Users can access Profile Pages by clicking on profile avatars found throughout the site, including popular profiles, post authors, and comments. Users can also access their own Profile Page via the authentication icon in the Navigation Bar.

![Profile Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013067/Screenshot_2024-05-29_at_21.01.04_op31jr.png)

![Profile Edit Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013067/Screenshot_2024-05-29_at_21.01.22_h63q2q.png)

A user's Profile Page displays various information, including:

- Profile picture
- Username
- Profile Stats
- About section
- Published posts

When a user signs up for Animal Gram, a basic profile is automatically created with a username, password, and default avatar image. The only information initially generated on the profile page is the user's Profile Stats, which encompass:

- The number of posts the user has published
- The number of profiles the user is following
- The number of profiles following the user

The user's "About" section remains blank until the user visits their own Profile Page and chooses to edit the profile by adding personal details. Clicking on the "Edit Profile" option leads them to a form where they can update their profile picture and about section. Users have the flexibility to share as much or as little personal information as they prefer.

Each profile also includes a "Follow" button, allowing other users to follow or unfollow that profile. The user's published posts are listed on their Profile Page, which can be accessed through React-Bootstrap tabs for easy navigation.

### Reusable React Components

1. **Asset**
    - This versatile component is used throughout the website to load images, display messages, and indicate loading spinners.

2. **Avatar**
    - The Avatar component is consistently utilized to display user avatars across different pages of the website.

3. **NavBar**
    - The NavBar component serves as the primary navigation bar and is consistently present on every page of the website.

4. **Not Found**
    - The Not Found component is presented to users when they attempt to access an invalid URL.

5. **MoreDropdown**
    - Reused to enable users to edit and delete various items, such as posts and comments.

### Future Features

1. **Real-time User Interactions**
   - Enjoy real-time chat, notifications, and user-to-user messaging for seamless communication.
2. **Personalized User Profiles**
   - Customize your profile further, adding new sections and options to make it uniquely yours.
3. **Mobile App Development**
   - Stay tuned for the mobile app, extending accessibility to your favorite social platform.

   ## The Skeleton Plane

### Wireframes

#### Home Page
![Home Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717017620/Screenshot_2024-05-29_at_22.18.13_q2sxmy.png)

#### About Page
![About Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717017619/Screenshot_2024-05-29_at_22.18.27_jyzhyj.png)

#### Search Page
![Search Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717017618/Screenshot_2024-05-29_at_22.18.40_xxuvhf.png)

#### Feed Page
![Feed Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717017620/Screenshot_2024-05-29_at_22.18.13_q2sxmy.png)

#### Like Page
![Like Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717017620/Screenshot_2024-05-29_at_22.18.13_q2sxmy.png)

#### Add Post Page
![Add Post Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717017619/Screenshot_2024-05-29_at_22.18.59_rssedy.png)

#### SignIn and Up Page
![Sign In and Up Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717017618/Screenshot_2024-05-29_at_22.19.13_q9rg0e.png)

#### Profile Page
![Profile Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717017618/Screenshot_2024-05-29_at_22.19.33_hjcsvo.png)

#### Profile Edit Page
![Profile Edit Page](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717017619/Screenshot_2024-05-29_at_22.19.51_tkzntq.png)

### Database Structure

I've meticulously crafted the database structure for the Animal Gram Backend API. Here are the core models:

- **Users:** These are slightly customized from Django's standard User model to align with our requirements.
- **Profiles:** Automatically generated upon user registration, these profiles are tailored to encompass essential information.
- **Posts:** Users can create posts, which are shared on the platform.
- **Likes:** Indicate if a user appreciates another user's post.
- **Comments:** Enable users to provide feedback and commentary on posts.
- **Followers:** Empower users to follow each other within the platform.

To understand the relationships between these models, please refer to the Entity-Relationship diagram:

![Entity Relationship Diagram](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717014871/er_diagram_1_hcli7m.png)

ER Diagram

## The Surface Plane

### Design

#### Colour Scheme

The "Animal Gram" project incorporates a distinct color scheme to reflect its unique identity and mission. These carefully selected colors are inspired by nature and animals, emphasizing the platform's dedication to animal lovers.

- **Color 1:** #b08d79
- **Color 2:** #047555
- **Color 3:** #fff

It is very naturistic and natural colors resonating with Animals and has a very welcoming tone. 

![Colour Pallette](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717018442/Screenshot_2024-05-29_at_22.33.34_dfbevu.png)


The logo was created with [Canva](https://canva.com)

![Logo](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717013198/AnimalGram_Logo_ylfznd.png)

This is a themed logo with themed colors to resonate with the website and give a uniform look

![Logo]()
    
#### Typography


#### Typography

In the "Animal Gram" project, the fonts "DM Sans" and "Lobster" have been thoughtfully chosen to enhance the visual aesthetics and readability of the platform.

- **DM Sans**, sans-serif
- **Lobster**, sans-serif

These fonts are sourced from [Google Fonts](https://fonts.google.com/).

**DM Sans** is a modern and highly legible font. Its clean, geometric design offers exceptional clarity and readability, making it accessible to a wide audience. DM Sans also gives a very sophisticated look and makes the website look professional

**Lobster** adds a touch of elegance and uniqueness to the design. Its playful and cursive style provides a distinctive look that enhances the overall aesthetic appeal of the platform.
    
#### Imagery

- The illustrations used across the app were generated using [Canva](https://canva.com). 

- I picked this illustration set for their artfulness, playful tone, and appropriate subject matter - I then color-edited them to the app's color scheme.

- The images for the posts and profiles created on the website were sourced from [Unsplash](https://unsplash.com/)


- The icons were imported from [Font Awesome](https://fontawesome.com/).

## Testing

Please click [here](TESTING.md) to read more about AnimalGram's testing

## Technologies Used Frontend

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML) - Provides the content and structure for the website
- [CSS3](https://en.wikipedia.org/wiki/CSS) - Provides the styling for the website
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Provides interactive elements of the website
- [React.js](https://en.wikipedia.org/wiki/React_(software)) - Provides the base for the frontend components

### Frameworks, Software and Web Applications

- [React Bootstrap](https://react-bootstrap.github.io/) - A CSS framework that helps build solid, responsive, mobile-first sites
- [Balsamiq](https://balsamiq.com/) - Used to create the wireframes
- [Colors.co](https://coolors.co/) - For Colour Pallette
- [Github](https://github.com/) - Used to host the repository, store the commit history and manage the project board containing user stories
- [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that the application is deployed to
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test site performance
- [Logo](https://canva.com) - Used to generate the Animal Gram logo
- [Favicon](https://favicon.io/) - Used to create the favicon
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness
- [Google Fonts](https://fonts.google.com/specimen/DM+Sans) - Used to import the website font 
- [Cloudinary](https://cloudinary.com/) - A service that hosts image files in the project.
- [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
- [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
- [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code
- [Unsplash](https://unsplash.com/) - Free stock image provider for posts and avatars that were uploaded 
- [Font Awesome](https://fontawesome.com/) - Used for icons across UI

## Technologies Used Backend

### Languages

- Python provides the functionality for the DRF backend framework.
- Javascript providing the functionality for the front end.

### Frameworks & Software

- [Django Rest Framework](https://www.django-rest-framework.org/) - A framework for building web APIs
- [PEP8 Validation](https://pypi.org/project/pep8/) - pep8 is a tool to check your Python code against some of the style conventions in PEP 8.
- [Github](https://github.com/) - Used to host the repository, store the commit history and manage the project board containing user stories.
- [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that the application is deployed to.
- [Cloudinary](https://cloudinary.com/) - A service that hosts image files in the project.

### Libraries

The libraries used in this project are located in the requirements.txt file and have been documented below:

- [asgiref](https://pypi.org/project/asgiref/) - ASGI is a standard for Python asynchronous web apps and servers to communicate with each other, and positioned as an asynchronous successor to WSGI.
- [cloudinary](https://pypi.org/project/cloudinary/) - The Cloudinary Python SDK allows you to quickly and easily integrate your application with Cloudinary.
- [dj-database-url](https://pypi.org/project/dj-database-url/0.5.0/) - This simple Django utility allows you to utilize the 12factor inspired DATABASE_URL environment variable to configure your Django application.
- [dj-rest-auth](https://pypi.org/project/dj-rest-auth/) - Drop-in API endpoints for handling authentication securely in Django Rest Framework.
- [Django](https://pypi.org/project/Django/) - Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
- [django-allauth](https://pypi.org/project/django-allauth/) - Integrated set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication.
- [django-cloudinary-storage](https://pypi.org/project/django-cloudinary-storage/) - Django Cloudinary Storage is a Django package that facilitates integration with Cloudinary by implementing Django Storage API.
- [django-cors-headers](https://pypi.org/project/django-cors-headers/) - A Django App that adds Cross-Origin Resource Sharing (CORS) headers to responses. This allows in-browser requests to your Django application from other origins.
- [django-filter](https://pypi.org/project/django-filter/) - Django-filter is a reusable Django application allowing users to declaratively add dynamic QuerySet filtering from URL parameters.
- [django-taggit](https://pypi.org/project/django-taggit/) - Django-taggit a simpler approach to tagging with Django.
- [django-rest-framework](https://pypi.org/project/djangorestframework/) - Web-browsable Web APIs.
- [djangorestframework-simplejwt](https://pypi.org/project/djangorestframework-simplejwt/) - Simple JWT is a JSON Web Token authentication plugin for the Django REST Framework.
- [gunicorn](https://pypi.org/project/gunicorn/) - Gunicorn ‘Green Unicorn’ is a Python WSGI HTTP Server for UNIX. It’s a pre-fork worker model ported from Ruby’s Unicorn project. The Gunicorn server is broadly compatible with various web frameworks, simply implemented, light on server resource usage, and fairly speedy.
- [oauthlib](https://pypi.org/project/oauthlib/) - OAuthLib is a framework which implements the logic of OAuth1 or OAuth2 without assuming a specific HTTP request object or web framework.
- [pillow](https://pypi.org/project/Pillow/8.2.0/) - The Python Imaging Library adds image processing capabilities to your Python interpreter.
- [psycopg2](https://pypi.org/project/psycopg2/) - Psycopg is the most popular PostgreSQL database adapter for the Python programming language.
- [PyJWT](https://pypi.org/project/PyJWT/) - A Python implementation of RFC 7519.
- [python3-openid](https://pypi.org/project/python3-openid/) - OpenID support for modern servers and consumers.
- [pytz](https://pypi.org/project/pytz/) - This is a set of Python packages to support use of the OpenID decentralized identity system in your application, update to Python 3.
- [requests-oauhlib](https://pypi.org/project/requests-oauthlib/) - Provides first-class OAuth library support for Requests.
- [sqlparse](https://pypi.org/project/sqlparse/) - sqlparse is a non-validating SQL parser for Python.

## Deployment Frontend

### Deployment to Heroku

1. In your Heroku account, select Create New App, and give it a unique name related to your project.
2. Select a region corresponding to where you live and click 'Create App'.
3. Head into the 'Deploy' tab, select GitHub as the 'deployment method', find your project repository and click 'Connect' your Heroku app to the GitHub repository.
4. Fill out config vars needed.
5. Click 'Deploy branch' to trigger Heroku to start building the application.
6. Once you see the message saying 'build succeeded', you can click 'Open App' to see your application in the browser.

### Clone this Project Repository

Go into local IDE and within the terminal 
```
git clone https://github.com/linkofrepository
```

## Deployment Backend

The project was deployed to [Heroku](https://www.heroku.com/).

1. To begin with we need to create a GitHub repository
2. Fill in the details for the new repository and then click 'Create Repository'.
3. When the repository has been created
4. Go into local IDE and within the terminal and 
```
git clone https://github.com/linkofrepository
```
4. Install Django and the supporting libraries that are needed, using the following commands:
```
- `pip3 install 'django<4' gunicorn`
- `pip3 install 'dj_database_url psycopg2`
- `pip3 install 'dj3-cloudinary-storage`
```
5. When Django and the libraries are installed we need to create a requirements file.

```
pip3 freeze --local > requirements.txt - This will create and add required libraries to requirements.txt
```

6. Create the project.
```
django-admin startproject YOUR_PROJECT_NAME
``` 
Cd into project

7. When the project is created we can now create the applications. My project consists of the following apps; Profiles, Comments, Followers, Likes, and Posts and Messaging.
```
python3 manage.py startapp APP_NAME
```
This will create an application

8. We now need to add the applications to settings.py in the INSTALLED_APPS list.

9. Now it is time to do our first migration and run the server to test that everything works as expected. This is done by writing the commands below.

```
python3 manage.py makemigrations
```
This will prepare the migrations
```
python3 manage.py migrate
```
This will migrate the changes
```
python3 manage.py runserver
```
 This runs the server. To test it, click the open browser button that will be visible after the command is run.

10. Now it is time to create our application on Heroku, attach a database, prepare our environment and settings.py file and setup the Cloudinary storage for our static and media files.

- Once signed into your [Heroku](https://www.heroku.com/) account, click on the button labeled 'New' to create a new app.

11. Choose a unique app name, choose your region and click 'Create app".

12. Next we need to connect an external PostgreSQL database to the app from [ElephantSQL](https://customer.elephantsql.com/login). Once logged into your ElephantSQL dashboard, you click 'Create New Instance' to create a new database. Give the database a:

- Name
- Tiny Turtle Free Plan
- Selected data center near you

and click 'Create Instance'. Return to your ElephantSQL Dashboard, and click into your new database instance. Copy the Database URL and head back to Heroku.

13. Back in your Heroku app settings, click on the 'Reveal Config Vars' button. Create a config variable called DATABASE_URL and paste in the URL you copied from ElephantSQL. This connects the database into the app.

14. Go back to GitPod and create a new env.py in the top level directory. Then add these rows.

- `import os` - This imports the os library
- `os.environ["DATABASE_URL"]` - This sets the environment variables.
- `os.environ["SECRET_KEY"]` - Here you can choose whatever secret key you want.

14. Back in the Heroku Config Vars settings, create another variable called SECRET_KEY and copy in the same secret key as you added into the env.py file. Don't forget to add this env.py file into the .gitignore file so that it isn't committed to GitHub for other users to find.

15. Now we have to connect to our environment and settings.py file. In the settings.py, add the following code:
```
`import os`

`import dj_database_url`

`if os.path.isfile("env.py"):`

`import env`
```

16. In the settings file, remove the insecure secret key and replace it with: 
```SECRET_KEY = os.environ.get('SECRET_KEY')```

17. Now we need to comment out the old database settings in the settings.py file (this is because we are going to use the postgres database instead of the sqlite3 database).

Instead, we add the link to the DATABASE_URL that we added to the environment file earlier.

18. Save all your fields and migrate the changes again.

````python3 manage.py migrate````

19. Now we can set up [Cloudinary](https://cloudinary.com/users/login?RelayState=%2Fconsole%2Fmedia_library%2Ffolders%2Fhome%3Fconsole_customer_external_id%3Dc-95a4cb26371c4a6bc47e19b0f130a1#gsc.tab=0) (where we will store our static files). First you need to create a Cloudinary account and from the Cloudinary dashboard copy the API Environment Variable.

20. Go back to the env.py file in Gitpod and add the Cloudinary url (it's very important that the url is correct):

```os.environ["CLOUDINARY_URL"] = "cloudinary://************************"```

21. Let's head back to Heroku and add the Cloudinary url in Config Vars. We also need to add a disable collectstatic variable to get our first deployment to Heroku to work.

22. Back in the settings.py file, we now need to add our Cloudinary Libraries we installed earlier to the INSTALLED_APPS list. Here it is important to get the order correct.

- cloudinary_storage
- django.contrib.staticfiles
- cloudinary

23. For Django to be able to understand how to use and where to store static files we need to add some extra rows to the settings.py file.

24. To be able to get the application to work through Heroku we also need to add our Heroku app and localhost to the ALLOWED_HOSTS list:

```ALLOWED_HOSTS = ['name.herokuapp.com', 'localhost']```

25. Now we just need to create the basic file directory in Gitpod.

- Create a file called \*_Procfile_ and add the line ```web: gunicorn PROJ_NAME.wsgi?``` to it.

26. Now you can save all the files and prepare for the first commit and push to Github by writing the lines below.
```
- `git add .`
- `git commit -m "Deployment Commit`
- `git push`
```

27. Now it's time for deployment. Scroll to the top of the settings page in Heroku and click the 'Deploy' tab. For deployment method, select 'Github'. Search for the repository name you want to deploy and then click connect.

28. Scroll down to the manual deployment section and click 'Deploy Branch'. Hopefully the deployment is successful!

### Cloning And Setting Up This Project

To clone and set up this project you need to follow the steps below.

1. When you are in the repository, find the code tab and click it.
2. To the left of the green GitPod button, press the 'code' menu. There you will find a link to the repository. Click on the clipboard icon to copy the URL.
3. Use an IDE and open Git Bash. Change directory to the location where you want the cloned directory to be made.
4. Type 'git clone', and then paste the URL that you copied from GitHub. Press enter and a local clone will be created.
5. To be able to get the project to work you need to install the requirements. This can be done by using the command below:

- `pip3 install -r requirements.txt` - This command downloads and installs all required dependencies that is stated in the requirements file.

6. The next step is to set up the environment file so that the project knows what variables that needs to be used for it to work. Environment variables are usually hidden due to sensitive information. It's very important that you don't push the env.py file to Github (this can be secured by adding env.py to the .gitignore-file). The variables that are declared in the env.py file needs to be added to the Heroku config vars. Ensure to do migrations before trying to run the server.

- ````python3 manage.py migrate```` - This will do the necessary migrations.
- `python3 manage.py runserver` - If everything i setup correctly the project is now live locally.

