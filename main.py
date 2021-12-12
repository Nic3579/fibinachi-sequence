
a = 1
b = 0

while True:
    basic.show_number(a)
    c = b
    b = a
    a = b + c
    basic.clear_screen()
    basic.pause(100)
    pass
