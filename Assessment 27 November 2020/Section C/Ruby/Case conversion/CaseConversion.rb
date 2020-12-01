# Get string from user
puts "Enter a String"

inputString = gets.chomp

# Get integer from user
puts "Enter an integer"

inputInt = gets.chomp.to_i


def swap(inputString, inputInt)
  # Method will swap case of a letter depending on the binary
  # representation of the supplied number.

  # Convwert integer a string representing the binary value of the integer
  intBinary = inputInt.to_s(2)

  # Create an array variable to be returned
  caseConverted = []

  # check if the binary string is shorter than the inputString variable
  # if it is shorter add another copy of the string to itself.
  # this simoplifies the iteration and case convertion in the for loop
  while intBinary.length < inputString.length
    intBinary = intBinary + intBinary
  end
  # convert the 2 string variables to arrays,
  # this makes looping over the elements in the string simpler
  #
  inputString = inputString.split("")
  intBinary = intBinary.split("")

  for i in 0..(inputString.length - 1)
    # Loop through each element in the inputString array
    # check if the ith element in the binary array is 1 or 0
    # and check if the ith element is an alphabet character
    # if it is both an alphabet character and the corresponding binary character is 1
    # push the uppercase value of the string to the caseConverted array
    # of the binaary character is 0 - push the lowercase value of the character to the caseConverted array
    # finally an else statement simply pushes any non alphabet characters to the output array
    if intBinary[i] == "1" && ((inputString[i]  =~ /[A-Za-z]/) != nil)
      caseConverted.push(inputString[i].upcase)
    elsif intBinary[i] == "0" && ((inputString[i]  =~ /[A-Za-z]/) != nil)
      caseConverted.push(inputString[i].downcase)
    else
      caseConverted.push(inputString[i])
    end

  end
  # return joined array as string
  return caseConverted.join

end

swap(inputString, inputInt)

puts swap(inputString, inputInt)