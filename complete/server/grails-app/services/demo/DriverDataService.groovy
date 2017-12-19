package demo

import grails.gorm.services.Service
import groovy.transform.CompileStatic

@CompileStatic
@Service(Driver)
interface DriverDataService {
    Driver save(String name)
}