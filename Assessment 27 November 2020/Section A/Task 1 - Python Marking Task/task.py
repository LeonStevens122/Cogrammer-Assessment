# Good Day,
##
# Regarding your question.
# class methods can be called from outside the class using dot notation
# check this page for some handy tips - https://www.xspdf.com/resolution/50921831.html
# checking out the W#Schools pages on python classes, Modules & Scope will also be of help
# https://www.w3schools.com/python/
# 
### General Code Review: ##
# Positives : Variable and function names are descriptive and well thought out
#
# Needs attention : Class and Object declarations do not make proper us of parameters.
#                                     



# An SMS Simulation class
def SMSMessage(object):
  
    hasBeenRead = False
    messageText = text
    fromNumber = number


def __init__(self, hasBeenRead, messageText, fromNumber):
    self.hasBeenRead = False
    self.messageText = text
    self.fromNumber = number


def MarkASRead(self):
    # remember 
    if userChoice == read:
        self.hasBeenRead = True


def add_sms():
    ## When declaring empty methods to be completed later
    ## use the  - pass - keyword 
    # this lets the Python compiler know to ignore the code 
    # It is also good practice to add a TODO - Comment in empty functions or methods
    # TODO - write function
    # This helps you and others keep understand what work is still needed 
    # and many IDE's such as VS Code will actually create a "Task list" automatically from this. 
    # which helps you to keep track of what work still needs to be completed on the project. 
    pass


def get_count():
def get_message():
def get_unread_messages():
def remove():


no_1 = SMSMessage(False, "Hello", "0798653452")
no_2 = SMSMessage(False, "WYD", "0845673864")
no_3 = SMSMessage(False, "How are you?", "0631873298")

SMSStore = []
userChoice = ""

while userChoice != "quit":
    userChoice = raw_input("What would you like to do - read/send/quit?")

    if userChoice == "read":
        # Place your logic here elif userChoice == "send":
        # # Place your logic here elif userChoice == "quit":
        print("Goodbye")
    else:
        print("Oops - incorrect input")
