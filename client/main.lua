ESX = nil

Citizen.CreateThread(function()
  while ESX == nil do 
    TriggerEvent('esx:getSharedObject', function(obj)
      ESX = obj 
    end)
    Wait(0)
  end
end)

RegisterCommand('nuion', function()
  SendNUIMessage({
    type = "toggle",
    value = true,
  })
end)

RegisterCommand('nuioff', function()
  SendNUIMessage({
    type = "toggle",
    value = false,
  })
end)
