#include <iostream>
#include <filesystem>

namespace fs = std::filesystem;

void get_file_names(const std::string& folder_path) {
    // Check if the folder exists
    if (!fs::exists(folder_path)) {
        std::cout << "The folder '" << folder_path << "' does not exist." << std::endl;
        return;
    }

    // Iterate through each file in the folder
    std::cout << "Formatted output:" << std::endl;
    for (const auto& entry : fs::directory_iterator(folder_path)) {
        if (entry.is_regular_file()) {
            std::string file_name = entry.path().filename();
            std::cout << "{ name: \"" << file_name << "\", description: \"Description for " << file_name << "\", link: \"learn/" << file_name << "\" }," << std::endl;
        }
    }
}

int main() {
    // Replace "your_folder_path" with the path of the folder you want to inspect
    std::string folder_path = "/Users/chetanpatil/Desktop/code/Web_dev/Learning/js/learn";
    get_file_names(folder_path);

    return 0;
}
