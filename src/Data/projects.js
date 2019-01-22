
var projects = {
    "PowerShell": {
        "Modules" : [
            {
                "Name" : "PowerDoc",
                "Description" : [
                    "PowerShell Module to help with the documentation of scripts and modules outside of PowerShell.  This module lets you run a command and generate markdown or HTML files with the information written down in the comment block.  It will also document the classes that you write and expose all public information about them.",                    
                ],
                "ProjectLink" : "https://github.com/luther38/PowerDoc",
                "PublicProject" : true
            },
            {
                "Name" : "PSLog",
                "Description": [
                    "PowerShell Module to assist with logging to multiple targets.  This is built in Classes that were added to PowerShell in version 5.  The goal was to let me keep writing scripts for work to keep going with more automation but still have the flex of adding more targets as needed.",
                    "This is a active project for me that I use at work still.  It is currently in a beta stage as I get more targets added and get more unit tests in place."
                ],
                "ProjectLink" : "https://github.com/luther38/PSLog",
                "PublicProject" : true
            }
        ],
        "Processes" : [
            {
                "Name": "demo",
                "Description" : [
                    "demo",
                ],
                "ProjectLink" : "",
                "PublicProject" : false
            }
        ]
    },
    "CSharp" : [
        {
            "Name" : "Janus",
            "ProjectType": ".Net Core Website",
            "Description" : [
                "This is a project to assist with asset management for IT Departments.  This project contains a website, REST API and a client application.",
                "The REST part of the application is designed for the client application to be able to post information to the tenant.  ",
                "Line 2"
            ],
            "ProjectLink" : "https://github.com/luther38/Janus",
            "PublicProject" : true
        },
        {
            "Name" : "AutoShipping",
            "ProjectType": ".Net Framework Automation",
            "Description" : [
                "This project is the first project that I worked on at Directors Mortgage.  The goal was to build a new merged pdf document when a loan hits a specific milestone in the loan process.  Once the package is built we would upload the file to our investor who purchased the loan.",
                "With all the work that went into this project, we were able to save money and time for the company.  The department use to be more than four people, with the automation we were able to save money and reduce the amount of time required to get loans submitted."
            ],
            "ProjectLink" : "",
            "PublicProject" : false
        },
        {
            "Name" : "AutoMarketAppraisal",
            "ProjectType": ".Net Framework Automation",
            "Description" : [
                "This project was added to assist with the end users on a part of the loan process that they tend to forget a lot.  When an end user goes through and gets an appraisal quote they are supposed to take the information and enter it into the loan data.  As it was normally something that was forgotten, we solved the problem with, code.",
                "Once an end user would request the quote we would take the results and load it into SQL and use that as the codes trigger.  With the trigger, the automation would open up the loan, add the quote values into the correct fields and upload the exported pdf file.  Once that is done an email is sent to the person who requested the quote."
            ],
            "ProjectLink" : "",
            "PublicProject" : false
        },
        {
            "Name" : "AutoDocGen",
            "ProjectType" : ".Net Framework Automation",
            "Description" : [

            ],
            "ProjectLink" : "",
            "PublicProject" : false
        },
        {
            "Name" : "DWMarketAppraisal",
            "Description" : "",
            "ProjectLink" : "",
            "PublicProject" : false
        }
    ]
};

module.exports = projects;