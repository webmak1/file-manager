# File Manager

## INSTRUCTIONS:

- Make sure that you have **v16 LTS Node** installed on your computer
- Clone or download this repo https://github.com/MaksimBashchuk/file-manager
- Open your newly created folder with your code editor
- Checkout `file-manager` branch

## How to use this app

### Starting app

- To start application run command `npm run start -- --username=your_username` or `npm run start -- --username="your name with spaces"` in case of using spaces in your user name.

> **NOTE:** if you need to pass arguments which contains spaces you should wrap them all into double quotes: `cp "path with spaces" "one more path with spaces"` event if second argument does not contain spaces `cp "path with spaces" "path_without_spaces"`.

### Navigation & working directory (nwd)

- `up` Go upper from current directory (when you are in the root folder this operation shouldn't change working directory). Arguments passed after `up` keyword will be ignored.
- `cd path_to_directory` Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute). Path with spaces should be surrounded in double quotes (`"path to directory"`). No arguments or first argument is a non-existing path will cause `Operation failed` error. If more than one argument passed second and subsequent will be ignored.
- `ls` List all files and folder in current directory and print it to console. Arguments passed after `ls` keyword will be ignored.

### Basic operations with files

- `cat path_to_file` Read file and print it's content in console.
  > No arguments or first argument is a non-existing path will cause `Operation failed` error. If more than one argument passed second and subsequent will be ignored.
- `add new_file_name` Create empty file in current working directory.
  > No arguments will cause `Operation failed` error. If more than one argument passed second and subsequent will be ignored.
- `rn path_to_file new_filename` Rename file.
  > No arguments, more or less than 2 arguments, first argument is a non-existing path will cause `Operation failed` error.
- `cp path_to_file path_to_new_directory` Copy file.
  > No arguments, less than 2 arguments, argumentS is a non-existing path will cause `Operation failed` error. Third and subsequent arguments will be ignored.
- `mv path_to_file path_to_new_directory` Move file (same as copy but initial file is deleted).
  > No arguments, less than 2 arguments, arguments is a non-existing path will cause `Operation failed` error. Third and subsequent arguments will be ignored.
- `rm path_to_file` Delete file.
  > No argument or argument is a non-existing path will cause `Operation failed` error. Second and subsequent arguments will be ignored.

### Operating system info

> No flag, wrong flag, more than one argument after `os` keyword will cause `Operation failed` error.

- `os --EOL` Get EOL (default system End-Of-Line).
- `os --cpus` Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them).
- `os --homedir` Get home directory.
- `os --username` Get current system user name (Do not confuse with the username that is set when the application starts)
- `os --architecture` Get CPU architecture for which Node.js binary has compiled

### Hash calculation

> No argument, argument is a non-existing path will cause `Operation failed` error. More than one argument after `hash` keyword will be ignored.

- `hash path_to_file` Calculate hash for file and print it into console

### Compress and decompress operations

> No arguments, more or less than 2 arguments, first arguments is a non-existing path will cause `Operation failed` error.

- `compress path_to_file path_to_destination` Compress file (using Brotli algorithm)
- `decompress path_to_file path_to_destination` Decompress file (using Brotli algorithm)
