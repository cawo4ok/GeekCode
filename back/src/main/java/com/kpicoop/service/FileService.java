package com.kpicoop.service;

import com.kpicoop.model.File;

public interface FileService {

    File findById(int id);
    File addFile(File file);
    void delete(int id);
    File findByPath(String path);
    File saveFile(File file);

}
