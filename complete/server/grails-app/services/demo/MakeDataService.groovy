package demo

import grails.gorm.services.Service
import groovy.transform.CompileStatic

@CompileStatic
@Service(Make)
interface MakeDataService {
    Make save(String name)
}