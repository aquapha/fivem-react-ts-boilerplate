-- ESX = nil

-- Citizen.CreateThread(function()
--   while ESX == nil do 
--     TriggerEvent('esx:getSharedObject', function(obj)
--       ESX = obj 
--     end)
--     Wait(0)
--   end
-- end)

RegisterCommand('nui', function()
  SetNuiFocus(true, true)
  SendNUIMessage({
    type = "toggle",
  })
end)

RegisterNUICallback('close', function()
  SetNuiFocus(false, false)
end)
