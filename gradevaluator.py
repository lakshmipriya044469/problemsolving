mark = float(input("Enter the marks: "))
if mark > 90 and mark <= 100:
    print("Grade A")
elif mark > 80 and mark <= 90:
    print("Grade B")
elif mark > 70 and mark <= 80:
    print("Grade C")
elif mark > 60 and mark <= 70:
    print("Grade D")
elif mark >= 0 and mark <= 60:
    print("Grade F")
else:
    print("Invalid marks! Enter between 0 and 100") 