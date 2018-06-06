var HomeViewModel = function() {
    var self = this;

    self.animalList = ko.observableArray([]);
    self.animalName = ko.observable();
    self.staffList = ko.observableArray([]);
    self.zooName = ko.observable();

    // This is hideous, only throwing it in like this due to time constraint
    self.mondayOpen = ko.observable();
    self.mondayClose = ko.observable();
    self.mondayEmployees = ko.observableArray();
    self.tuesdayOpen = ko.observable();
    self.tuesdayClose = ko.observable();
    self.tuesdayEmployees = ko.observableArray();
    self.wednesdayOpen = ko.observable();
    self.wednesdayClose = ko.observable();
    self.wednesdayEmployees = ko.observableArray();
    self.thursdayOpen = ko.observable();
    self.thursdayClose = ko.observable();
    self.thursdayEmployees = ko.observableArray();
    self.fridayOpen = ko.observable();
    self.fridayClose = ko.observable();
    self.fridayEmployees = ko.observableArray();
    self.saturdayOpen = ko.observable();
    self.saturdayClose = ko.observable();
    self.saturdayEmployees = ko.observableArray();
    self.sundayOpen = ko.observable();
    self.sundayClose = ko.observable();
    self.sundayEmployees = ko.observableArray();

    self.addAnimal = function() {
        if(!self.animalName() || self.animalList.length >= 20) {
            return;
        }
        $.ajax({
            type: 'POST',
            url: '/addAnimal',
            data: {
                name: self.animalName()
            },
            success: function(animals) {
                self.animalList(animals);
            }
        });
    };

    self.removeAnimal = function(animal) {
        $.ajax({
            type: 'POST',
            url: '/removeAnimal',
            data: {
                id: animal.id
            },
            success: function(animals) {
                self.animalList(animals);
            }
        });
    };

    self.loadSchedule = function() {
        $.ajax({
            type: 'GET',
            url: '/schedule',
            success: function(schedule) {
                var monday = schedule['Monday'];
                self.mondayOpen(monday.open);
                self.mondayClose(monday.close);
                self.mondayEmployees(monday.employees);
                
                var tuesday = schedule['Tuesday'];
                self.tuesdayOpen(tuesday.open);
                self.tuesdayClose(tuesday.close);
                self.tuesdayEmployees(tuesday.employees);
                
                var wednesday = schedule['Wednesday'];
                self.wednesdayOpen(wednesday.open);
                self.wednesdayClose(wednesday.close);
                self.wednesdayEmployees(wednesday.employees);
                
                var thursday = schedule['Thursday'];
                self.thursdayOpen(thursday.open);
                self.thursdayClose(thursday.close);
                self.thursdayEmployees(thursday.employees);
                
                var friday = schedule['Friday'];
                self.fridayOpen(friday.open);
                self.fridayClose(friday.close);
                self.fridayEmployees(friday.employees);
                
                var saturday = schedule['Saturday'];
                self.saturdayOpen(saturday.open);
                self.saturdayClose(saturday.close);
                self.saturdayEmployees(saturday.employees);
                
                var sunday = schedule['Sunday'];
                self.sundayOpen(sunday.open);
                self.sundayClose(sunday.close);
                self.sundayEmployees(sunday.employees);
            }
        });
    };

    self.loadAnimalList = function() {
        $.ajax({
            type: 'GET',
            url: '/animalList',
            success: function(animals) {
                self.animalList(animals);
            }
        });
    };

    self.loadStaffList = function() {
        $.ajax({
            type: 'GET',
            url: '/staffList',
            success: function(staff) {
                self.staffList(staff);
            }
        });
    };

    self.loadZooInfo = function() {
        $.ajax({
            type: 'GET',
            url: '/zooInfo',
            success: function(zoo) {
                self.zooName(zoo.name);
            }
        });
    };

    self.initLoad = function() {
        self.loadAnimalList();
        self.loadStaffList();
        self.loadZooInfo();
        self.loadSchedule();
    };
    
    self.initLoad();
};
