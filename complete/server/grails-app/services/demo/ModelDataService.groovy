package demo

import grails.gorm.services.Service
import groovy.transform.CompileStatic

@CompileStatic
@Service(Model)
interface ModelDataService {
    Model save(String name)
}