// #include <iostream>
// #include <filesystem>

// namespace fs = std::filesystem;

// void get_file_names(const std::string& folder_path) {
//     // Check if the folder exists
//     if (!fs::exists(folder_path)) {
//         std::cout << "The folder '" << folder_path << "' does not exist." << std::endl;
//         return;
//     }

//     // Iterate through each file in the folder
//     std::cout << "Formatted output:" << std::endl;
//     for (const auto& entry : fs::directory_iterator(folder_path)) {
//         if (entry.is_regular_file()) {
//             std::string file_name = entry.path().filename();
//             std::cout << "{ name: \"" << file_name << "\", description: \"Description for " << file_name << "\", link: \"learn/" << file_name << "\" }," << std::endl;
//         }
//     }
// }

// int main() {
//     // Replace "your_folder_path" with the path of the folder you want to inspect
//     std::string folder_path = "/Users/chetanpatil/Desktop/code/Web_dev/Learning/js/learn";
//     get_file_names(folder_path);

//     return 0;
// }


#include <iostream>
#include <filesystem>
#include <vector>
#include <algorithm>

namespace fs = std::filesystem;

struct FileInfo {
    std::string name;
    std::string description;
    std::string link;
};

void get_file_names(const std::string& folder_path) {
    // Check if the folder exists
    if (!fs::exists(folder_path)) {
        std::cout << "The folder '" << folder_path << "' does not exist." << std::endl;
        return;
    }

    // Container to store file information
    std::vector<FileInfo> file_info_list;

    // Iterate through each file in the folder and store information
    for (const auto& entry : fs::directory_iterator(folder_path)) {
        if (entry.is_regular_file()) {
            std::string file_name = entry.path().filename();
            file_info_list.push_back({file_name, "Description for " + file_name, "learn/" + file_name});
        }
    }

    // Sort the file names in ascending order
    std::sort(file_info_list.begin(), file_info_list.end(),
              [](const FileInfo& a, const FileInfo& b) {
                  return a.name < b.name;
              });

    // Print the formatted output
    std::cout << "Formatted output in ascending order:" << std::endl;
    for (const auto& file_info : file_info_list) {
        std::cout << "{ name: \"" << file_info.name << "\", description: \"" << file_info.description << "\", link: \"" << file_info.link << "\" }," << std::endl;
    }
}

int main() {
    // Replace "your_folder_path" with the path of the folder you want to inspect
    std::string folder_path = "/Users/chetanpatil/Desktop/code/Web_dev/Learning/js/learn";
    get_file_names(folder_path);

    return 0;
}
