package demo

import grails.gorm.services.Service
import groovy.transform.CompileStatic

@CompileStatic
@Service(Vehicle)
interface VehicleDataService {
    Vehicle save(String name, Driver driver, Make make, Model model)
}