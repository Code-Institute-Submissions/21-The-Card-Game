# 21 The Card Game


# Project Summary

This website aims to demonstrate my skills of Javascript, HTML & CSS as learned from the Code Institute Full Stack Software Development course. In order to do so I will create my version of the card game Twenty-One. The project will be created using a mobile first design strategy and will ensure the site is fully responsive across all devices. The project will further the developers knowledge of Javascript and it's implementation.

# Contents


# The origin of the card game Twenty-One

Twenty-One, formerly known as Vingt-Un in Britain, France and America, is the name given to a family of popular card games, the progenitor of which is recorded in Spain in the early 17th century. The game is first mentioned by name as early as 1611 in a Spanish dictionary where, under the entry for "card" (carta), it mentions the game of Ventiuno ("twenty-one")

Twenty-One rose to prominence in France in the 18th century and spread from there to Germany and Britain from whence it crossed to America. Known initially as Vingt-Un in all those countries, it developed into Pontoon in Britain after the First World War and Blackjack in Canada and the United States in the late 19th century, where the legalisation of gambling increased its popularity.

Information gathered from Wikipedia. Read More here

# User Experience (UX) 

# Strategy

## Developer Objectives

To grow my skills as a developer and create a  simple easy to use and enjoyable interactive game. Develop the project from its initial concept to the final finished product. To utilise and expand my skills in Javascript, HTML & CSS.

### Target Audience:

* General public.
* People looking for a fun distraction while taking a break from their day.
* Commuters who like to play games to pass the time on their journey


## User Stories

1.	As a user I want to be able to easily understand the rules of the game so I can get started quickly.
2.	As a user I want the game play to be intuitive so I don’t have to spend much time learning how to play.
3.	As a user I want a fun and interesting game so that I can enjoy playing it when I have some free time.
4.	As a user I want to know if I win, lose or draw a game so that I can keep playing and improve.
5.	As a user I want to know how many games I win/lose/draw so that I can track how well I’m doing.
6.	As a user I want to be able to reset a game so that I can start again.
7.	As a user I want to have a visually appealing interface so that I will enjoy playing the game for longer.
8.	As a user I want a game I can play on all my devices so that I can play while on the go.

## Site Owner Stories

1.	As a site owner I want to present my work in a professional, creative and visually appealing way.
2.	As a site owner I want to provide a good user experience for my users, so that they want to come back.
3.	As a site owner I want to present a game users can start playing quickly and intuitively so that they don’t have to make a big time commitment in learning how to play.
4.	As a site owner I want to provide feedback to my users on how they are doing.
5.	As a site owner I want to give users options so they can style the game to their liking.
 
	

# Scope
This will be a Minimal Viable Product containing the most important core content required.

#### Functional Specifications: 

*	Rules 
*	Game statistics
*	Reset
*	Start game
*	Settings

*	Win/Lose/Draw game outcomes
*	Background music and sound effects


#### Content Requirements:

*	Logo.
*	Brief description of how to play.
*	Option to change theme.
*	Reset button.
*	Game stats for tracking win/lose/draw.
*	Dealer heading
*	Display dealer hand.
*	Display card total for dealer.
*	Player heading.
*	Display player hand.
*	Display card total for player.
*	Display game outcomes – win/lose/draw.
*	Game play buttons.

#### Strategy/Scope Trade Off
Providing background music and sound effects for the game was not deemed to be of high importance at this time. There is a thin line between irritating the user and enhancing the user experience using music and so will not be included in the initial release of the website.

# Structure

### Interaction Design: 

User interactions will be intuitive and allow for easy game play. 
The game play centres around 3 clearly labelled buttons at the bottom of the screen for easy access when playing. One button to start the game, one button to request another card i.e. hit and one button when the player is happy with their hand and wants to hold.

### Information Design: 

Will allow for the prioritisation of the information to be displayed in a clear and concise manner to make it as easy as possible for the user to read and to quickly find the information that is most relevant to their needs.

The 4 game options buttons are displayed above the game play area. These allow the user to change the theme, read the rules, check their game stats using modals The fourth button allows users to reset a game.

Modal pop ups used to deliver information about the game outcome and inform the player if they win, lose or draw.

# Skeleton

Wireframes for Mobile, Tablet & Desktop

ADD LINKS...........

## Difference between final design and original wireframes:

### Logo:
In the original wireframes the logo/heading was 21 Card Game this was changed to be 21 The Card Game for better readability.

### Player Heading:
The player heading has moved to above the player hand as it gives better structure to the game play area and maintains the same hierarchy as the dealer heading/hand layout.

###Win/Lose/Draw Modals:
The win, lose and draw modals have been expanded to now include more options to give the player more feedback as to how they won or lost the game. Rather than the 3 modals outlined in the wireframes we now have a modal for each of the following game outcomes:
*	Player wins by getting 21
*	Dealer gets 21, player loses
*	Player wins
*	Dealer wins, player loses
*	Player went bust, dealer wins
*	Dealer went bust, player wins
*	A draw

### Deal Button:
The deal button in the original wireframes has been renamed to start, this gives the user a clearer understanding of the intent of the button.


# Surface

#### Typography:

Montserrat Subrayada font is used for the main logo as it’s unique underlined style lends well to being used as a heading/logo which provides immediate impact.

Lora is an well-balanced contemporary serif with roots in calligraphy which offers a great contrast to the graphic heading of Montserrat Subrayada and allows for easy reading of the text content of the Website.


#### Colour scheme: 

##### Classic Theme:
![]()
The classic green colour scheme is a nod to the green felt used in casino tables where the game would often be played. The colours #c9de9 & #398235 are used to create a light to dark gradient from top to bottom to soften the scheme and provide visual interest rather than using one solid colour.

![]()
The font colour used is #120202 which was checked for contrast against the background colours using the Webaim contrast checker. This same colour is also used for the border around the game board area.

##### Beach Theme:
![]()
The beach theme uses a beach image as the background. The change of colours from the sea to the sand in the image also echoes the gradient effect of the classic theme. The beach image is given a slight blur effect to ensure the game contents, cards, score etc are still the main focus while providing a tranquil background. All other colours are the same as for the classic theme.


##### Night Theme:
![]()
The night theme uses an image of the night sky as its background. This particular image was chosen as it also echoes the gradient effect first created in the classic theme, with the changing colour of the night sky from top to bottom. This may be a more suitable background for those that prefer a dark background or like to play at night.

![]()
The font colour was changed to #D6D6D6 and was chosen to give sufficient contrast with the backdrop without being too bright. The border colour of the game board area is also set to this colour.

##### Accent Colours & Modal Windows
![]()
The accent colour #E27D60 is used for all the buttons and the headings in the modal pop ups.  This colour was chosen as it works well in contrast to the backgrounds of the three different themes.

Modals were created with a dark background of rgba(06, 09, 06, 0.761) which includes a slight transparency to still feel connected to the game/background behind. 

The font colour used in the modals with text content is #FAFAD2, this is also the colour of the play again button in the game outcome modals.

##### Cards
![]()
Card background: #FEF3EC
The white of the cards was chosen as the best contrast to the backgrounds used while also not being too contrasting.

Red cards: #CE070E

Black cards: #120202

Card border: #3D0D0D


# Features 

* Responsive on all devices.





## Future Features

* Difficulty level added where the second dealer card is not revealed until after the player decides to hold.
* Implement a betting system.
* Background music and sound effects.




# Technologies Used


# Testing

## Code Validators & Auto Prefixer:



## Lighthouse from Chrome Dev Tools Testing:


## Links & Buttons Testing:



## Form Testing: ?????



## Device testing:



## Browser Testing:



## Friends & Family User Testing:



## Testing User Stories





## Testing Business Owner Stories




## Implementation Issues/Solutions:
		


## Known Bugs

Bugs found and not fixed:



# Deployment

This website was created in the Gitpod development environment. After installing the Gitpod extension for Chrome web browser and creating a new repository in GitHub using the Code Institute template, the green Gitpod button was used to initialise the repository in Gitpod. Throughout the process the git commands `git add` and `git commit` were used to store the work in the local Gitpod environment, `git push` would then be used to push the commits to the GitHub repository. From here the website could then deployed to Git Pages:

## Git Hub Pages:

From the Git Hub repository:
 - Go to settings
 - Scroll down to Git Hub Pages section
 - Select branch to be deployed, in this case the master branch
 - Click Save

## Creating A Local Clone:
You can clone the repository to create a local copy on your computer.

From the Git Hub repository:
- Click `Code` at the top of the file list
- Click the clipboard icon to copy the url provided

Open terminal:
- Change the current working directory to where you want the cloned directory to be
- Type `git clone` and paste the copied url after it
- Press enter and the clone will be created


# Credits

## Code




## Resources


## Content



## Media



## Acknowledgements


##  Disclaimer

This project is for educational purposes only.
