from lxml import html
from bs4 import BeautifulSoup

def gpa_calculator(file_path):
    with open(file_path, "r") as f:
        page = f.read()

    soup = BeautifulSoup(page, 'lxml')

    # find all table instances with 7 columns
    table_list = soup.find_all('table', attrs={'cols': 7})

    # each class is in its own <tr>
    each_course = []
    for entry in table_list:
        class_list = entry.find_all('tr')
        for course in class_list:
            each_course.append(course.get_text())


    # only grab courses that one has gotten a grade for
    completed_courses = []
    for entry in each_course:
        split_up = entry.splitlines()
        if len(split_up) != 7:
            continue
        print(split_up)
        if split_up[5] != "":
            completed_courses.append(split_up)


    grade_dict = {"A": 4, "B": 3, "C":2}

    total_points = 0
    num_courses = 0

    for entry in completed_courses:
        grade = entry[5].split()[0]
        # S, S*, dropped courses
        if grade not in grade_dict:
            continue
        total_points += grade_dict[grade]
        num_courses += 1

    # calculate GPA
    print(total_points/num_courses)


if __name__ == "__main__":
    gpa_calculator('nick.html')