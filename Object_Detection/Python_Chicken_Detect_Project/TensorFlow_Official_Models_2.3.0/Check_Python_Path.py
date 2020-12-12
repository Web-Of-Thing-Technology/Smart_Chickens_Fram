import os
import sys

try:
    user_paths = os.environ['PYTHONPATH'].split(os.pathsep)
except KeyError:
    user_paths = []

sys_paths = sys.path

print("User Path : ")
print(user_paths)

print("System Path : ")
print(sys_paths)
