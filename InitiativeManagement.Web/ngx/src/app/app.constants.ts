
export const roleNames = {
    superAdmin: 'SuperAdmin',
    admin: 'Admin',
    manager: 'Manager',
    client: 'Client',
  };

  export const userRoleDefaultPages = {
    SuperAdmin: 'pages/admin/manage',
    Admin: 'pages/admin/dashboard',
    Manager: 'pages/manager/dashboard',
    Client: 'pages/client',
  };

  export const appVariables = {
    userLocalStorage: 'user',
    resourceAccessLocalStorage: 'resourceAccessRaw',
    accessTokenServer: 'X-Auth-Token',
    defaultContentTypeHeader: 'application/json',
    loginPageUrl: '/login',
    registrationPageUrl: '/register',
    errorInputClass: 'has-error',
    successInputClass: 'has-success',
    actionSearchKey: 'Entity',
    resourceActions: {
      getActionName: 'Read',
      addActionName: 'Create',
      updateActionName: 'Update',
      deleteActionName: 'Delete',
    },
    defaultAvatarUrl: 'default_user',
    defaultDdlOptionValue: '-1',
    defaultDdlOptionText: 'Select',
    defaultStateDdlOptionText: 'Select State',
    defaultCityDdlOptionText: 'Select City',
    defaultClientDdlOptionText: 'Select Client',
    defaultRateUnitDdlOptionText: 'Select Unit',
    ng2SlimLoadingBarColor: 'red',
    ng2SlimLoadingBarHeight: '4px',
    accessTokenLocalStorage: 'accessToken',
    resourceNameIdentifier: 'Entity',
    docViewerurl: 'http://docs.google.com/gview?url=',
    msOfficeDocViewerPath: 'https://view.officeapps.live.com/op/embed.aspx?src=',
    goodleDocViewerPath: (url) => {
      return `http://docs.google.com/gview?url=${url}&embedded=true`;
    },
  }