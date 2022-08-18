/*
Question: Grasshopper- Personalised Greetings


Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

Note: The second word after the 'Hello should be in lowercase.

*/


greet = (name, owner) => name == owner ? 'Hello boss' : 'Hello guest'