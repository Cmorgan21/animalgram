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
| Filter Posts by Category | In my role as a developer/superuser, I can enable category-based post filtering, allowing users to view posts related to a specific category. | [X]  |
| Posts based on Liked History | Provide users with posts similar to the ones they frequently like to give them more suggested content. | [X]  |
| View Followed Profiles Content | Being a developer/superuser, I can provide a feature that allows users to see posts exclusively from profiles they follow. | [X]  |
| Chat Functionality | As a developer/superuser, I can implement chat functionality, enabling users to communicate with each other and message in real time. |

