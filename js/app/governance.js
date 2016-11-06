var govApp = angular.module('governanceApp');

govApp.controller('GovernanceController', function GovernanceController($scope) {
    $scope.templates = [
            {
                type: 'Windows Server 2012 R2 DE',
                size: 'Small',
                specs: '1 CPU, 3.5 GB RAM',
                internalprice: '€200/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FWindowsSmall%2Fazuredeploy.json',
                needsApproval: false,
                tags: ['Windows', 'Small']
            },
            {
                type: 'Windows Server 2012 R2 DE',
                size: 'Medium',
                specs: '2 CPU, 7.0 GB RAM',
                internalprice: '€400/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FWindowsMedium%2Fazuredeploy.json',
                needsApproval: false,
                tags: ['Windows', 'Medium']
            },
            {
                type: 'Windows Server 2012 R2 DE',
                size: 'Large',
                specs: '8 CPU, 28 GB RAM',
                internalprice: '€800/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FWindowsLarge%2Fazuredeploy.json',
                needsApproval: true,
                tags: ['Windows', 'Large']
            },
            {
                type: 'Linux Server Ubuntu',
                size: 'Small',
                specs: '1 CPU, 3.5 GB RAM',
                internalprice: '€125/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FLinuxSmall%2FLinuxVirtualMachine.json',
                needsApproval: false,
                tags: ['Linux', 'Small', 'Ubuntu']
            },
            {
                type: 'Linux Server Ubuntu',
                size: 'Medium',
                specs: '2 CPU, 7.0 GB RAM',
                internalprice: '€250/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FLinuxMedium%2FLinuxVirtualMachine.json',
                needsApproval: false,
                tags: ['Linux', 'Medium', 'Ubuntu']
            },
            {
                type: 'Linux Server Ubuntu',
                size: 'Large',
                specs: '8 CPU, 28 GB RAM',
                internalprice: '€500/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FLinuxLarge%2FLinuxVirtualMachine.json',
                needsApproval: true,
                tags: ['Linux', 'Large', 'Ubuntu']
            },
            {
                type: 'SQL Database + Web App',
                size: 'Small',
                specs: '5GB',
                internalprice: '€100/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FSQLDatabase%2Fazuredeploy.json',
                needsApproval: false,
                tags: ['SQL', 'Database', 'Web', 'app', 'Small']
            },
            {
                type: 'SQL Server AlwaysOn',
                size: 'Medium',
                specs: '5 VMs',
                internalprice: '€1250/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Fsqlvm-alwayson-cluster%2Fazuredeploy.json',
                needsApproval: true,
                tags: ['SQL', 'Database', 'AlwaysOn', 'Medium']
            },
            {
                type: 'SAP Netweaver',
                size: '3 tier',
                specs: '30.000 SAPS',
                internalprice: '€1000/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Fsap-3-tier-marketplace-image%2Fazuredeploy.json',
                needsApproval: true,
                tags: ['SAP', 'Netweaver', '3', 'tier']
            },
            {
                type: 'LAMP on Ubuntu',
                size: 'A2 VM',
                specs: 'Ubuntu,MySQL,Apache,PHP',
                internalprice: '€175/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Flamp-app%2Fazuredeploy.json',
                needsApproval: false,
                tags: ['LAMP', 'Linux', 'Ubuntu', 'MySQL', 'Apache', 'PHP']
            },
            {
                type: 'Storage',
                size: 'LRS',
                specs: '500TB',
                internalprice: '€25/month per TB ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FStorageAccount%2Fazuredeploystorage.json',
                needsApproval: false,
                tags: ['Storage', 'LRS']
            },
            {
                type: 'Virtual Network',
                size: 'Standard',
                specs: '2 subnets',
                internalprice: '€25/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2F101-vnet-two-subnets%2Fazuredeploy.json',
                needsApproval: false,
                tags: ['Virtual', 'Network', 'Vnet', 'subnet', 'Standard']
            },
            {
                type: 'Ubuntu with Docker',
                size: 'Standard F1',
                specs: '1 CPU, 2GB',
                internalprice: '€100/month ',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FUbuntuDocker%2Fubuntudocker.json',
                needsApproval: true,
                tags: ['Ubnutu', 'Docker', 'Standard', 'Linux']
            }        
    ];

    $scope.showTable = false;

    $scope.changeView = function () {
        $scope.showTable = !$scope.showTable;
    };
});