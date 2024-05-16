const _apiUrl = "/api/workorder";

export const getIncompleteWorkOrders = () => {
  return fetch(_apiUrl + "/incomplete").then((res) => res.json());
};

export const createWorkOrder = (workOrder) => {
    return fetch(_apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workOrder),
    }).then((res) => res.json);
  };

  export const updateWorkOrder = (workOrder) => {
    return fetch(`${_apiUrl}/${workOrder.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workOrder),
    });
  };

  export const completedWorkOrder = (id) => {
    return fetch(`${_apiUrl}/${id}/complete`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json",
        }
    });
  };

  export const deleteOrder = (id) => {
    return fetch(`${_apiUrl}/${id}/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        }
        
    })
  }